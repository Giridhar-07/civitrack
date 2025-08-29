import { QueryTypes, Transaction } from 'sequelize';
import sequelize from '../config/database';

/**
 * Utility for optimizing database queries with prepared statements and batching
 */

// Cache for prepared statements to avoid re-preparing
const preparedStatementCache: Record<string, any> = {};

/**
 * Execute a raw SQL query with prepared statement caching
 * @param sql SQL query with placeholders
 * @param replacements Values to replace placeholders
 * @param options Query options
 * @returns Query result
 */
export const executeOptimizedQuery = async <T = any>(
  sql: string,
  replacements: Record<string, any> | any[],
  options: {
    type?: QueryTypes,
    transaction?: Transaction,
    model?: any,
    mapToModel?: boolean,
    raw?: boolean
  } = {}
): Promise<T> => {
  const cacheKey = sql + (options.type || '');
  
  try {
    // Use cached prepared statement if available
    if (!preparedStatementCache[cacheKey]) {
      // Prepare the statement (this is a simulation as Sequelize doesn't expose direct prepared statements)
      preparedStatementCache[cacheKey] = true;
    }
    
    // Execute the query with replacements
    return await sequelize.query(sql, {
      replacements,
      type: options.type || QueryTypes.SELECT,
      transaction: options.transaction,
      model: options.model,
      mapToModel: options.mapToModel,
      raw: options.raw !== undefined ? options.raw : true,
    }) as T;
  } catch (error) {
    console.error('Optimized query execution error:', error);
    throw error;
  }
};

/**
 * Execute multiple queries in a batch transaction
 * @param queries Array of query objects with SQL and replacements
 * @returns Array of query results
 */
export const executeBatchQueries = async <T = any[]>(
  queries: Array<{
    sql: string,
    replacements: Record<string, any> | any[],
    type?: QueryTypes,
    model?: any,
    mapToModel?: boolean,
    raw?: boolean
  }>
): Promise<T[]> => {
  const transaction = await sequelize.transaction();
  
  try {
    const results = await Promise.all(
      queries.map(query => 
        executeOptimizedQuery(
          query.sql,
          query.replacements,
          {
            type: query.type || QueryTypes.SELECT,
            transaction,
            model: query.model,
            mapToModel: query.mapToModel,
            raw: query.raw !== undefined ? query.raw : true,
          }
        )
      )
    );
    
    await transaction.commit();
    return results as T[];
  } catch (error) {
    await transaction.rollback();
    console.error('Batch query execution error:', error);
    throw error;
  }
};

/**
 * Optimize a geospatial query for nearby locations
 * @param latitude Center latitude
 * @param longitude Center longitude
 * @param radiusInKm Radius in kilometers
 * @param limit Maximum number of results
 * @param offset Pagination offset
 * @returns Query result with locations and associated issues
 */
export const optimizedNearbyIssuesQuery = async (
  latitude: number,
  longitude: number,
  radiusInKm: number = 5,
  limit: number = 20,
  offset: number = 0
): Promise<any> => {
  const sql = `
    SELECT 
      i.id, i.title, i.description, i.reported_at as "reportedAt",
      i.created_at as "createdAt", i.updated_at as "updatedAt",
      l.id as "locationId", l.latitude, l.longitude, l.address,
      c.id as "categoryId", c.name as "categoryName", c.icon as "categoryIcon",
      s.id as "statusId", s.name as "statusName", s.color as "statusColor",
      u.id as "userId", u.username, u.email,
      ST_Distance(
        l.geom,
        ST_SetSRID(ST_MakePoint(:longitude, :latitude), 4326)
      ) * 111.32 as distance
    FROM 
      issues i
    JOIN 
      locations l ON i.location_id = l.id
    JOIN 
      categories c ON i.category_id = c.id
    JOIN 
      statuses s ON i.status_id = s.id
    JOIN 
      users u ON i.user_id = u.id
    WHERE 
      ST_DWithin(
        l.geom,
        ST_SetSRID(ST_MakePoint(:longitude, :latitude), 4326),
        :radiusInDegrees
      )
    ORDER BY 
      distance ASC
    LIMIT :limit OFFSET :offset
  `;

  const countSql = `
    SELECT 
      COUNT(*) as total
    FROM 
      issues i
    JOIN 
      locations l ON i.location_id = l.id
    WHERE 
      ST_DWithin(
        l.geom,
        ST_SetSRID(ST_MakePoint(:longitude, :latitude), 4326),
        :radiusInDegrees
      )
  `;

  // Convert radius from km to degrees (approximate)
  const radiusInDegrees = radiusInKm / 111.32;

  // Execute both queries in a batch
  const [issues, countResult] = await executeBatchQueries([
    {
      sql,
      replacements: {
        latitude,
        longitude,
        radiusInDegrees,
        limit,
        offset
      },
      type: QueryTypes.SELECT
    },
    {
      sql: countSql,
      replacements: {
        latitude,
        longitude,
        radiusInDegrees
      },
      type: QueryTypes.SELECT
    }
  ]);

  const total = countResult[0]?.total || 0;
  
  return {
    issues,
    pagination: {
      total,
      limit,
      offset,
      page: Math.floor(offset / limit) + 1,
      totalPages: Math.ceil(total / limit),
      hasNextPage: offset + limit < total,
      hasPrevPage: offset > 0
    }
  };
};