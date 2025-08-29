import sequelize from '../config/database';

/**
 * Migration script to add PostGIS geom column to locations table
 * and create spatial index for optimized geospatial queries
 */
export const migrateGeospatial = async () => {
  try {
    console.log('Starting geospatial migration...');
    
    // Check if geom column exists
    const [results] = await sequelize.query(
      "SELECT column_name FROM information_schema.columns WHERE table_name = 'locations' AND column_name = 'geom'"
    );
    
    // If geom column doesn't exist, add it
    if ((results as any[]).length === 0) {
      console.log('Adding geom column to locations table...');
      
      await sequelize.query(
        "ALTER TABLE locations ADD COLUMN geom GEOMETRY(Point, 4326)"
      );
      
      // Update existing records to set geom from lat/long
      console.log('Updating existing locations with geom data...');
      await sequelize.query(
        "UPDATE locations SET geom = ST_SetSRID(ST_MakePoint(longitude, latitude), 4326)"
      );
      
      // Create spatial index
      console.log('Creating spatial index...');
      await sequelize.query(
        "CREATE INDEX location_geom_idx ON locations USING GIST (geom)"
      );
      
      console.log('Successfully added geom column and spatial index to locations table');
    } else {
      console.log('Geom column already exists, skipping migration');
    }
    
    process.exit(0);
  } catch (error) {
    console.error('Error migrating locations table:', error);
    process.exit(1);
  }
};

// Run migration if this script is executed directly
if (require.main === module) {
  migrateGeospatial();
}