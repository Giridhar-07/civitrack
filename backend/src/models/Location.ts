import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../config/database';

// Location attributes interface
interface LocationAttributes {
  id: string;
  latitude: number;
  longitude: number;
  address?: string;
  geom?: any; // PostGIS geometry point
  createdAt: Date;
  updatedAt: Date;
}

// Location creation attributes interface (optional fields during creation)
interface LocationCreationAttributes extends Optional<LocationAttributes, 'id' | 'address' | 'createdAt' | 'updatedAt'> {}

// Location model class
class Location extends Model<LocationAttributes, LocationCreationAttributes> implements LocationAttributes {
  public id!: string;
  public latitude!: number;
  public longitude!: number;
  public address?: string;
  public geom?: any;
  public createdAt!: Date;
  public updatedAt!: Date;
}

const isSqlite = typeof (sequelize as any).getDialect === 'function' && (sequelize as any).getDialect() === 'sqlite';

// Initialize Location model
Location.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    latitude: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        min: -90,
        max: 90,
      },
    },
    longitude: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        min: -180,
        max: 180,
      },
    },
    geom: {
      // SQLite doesn't support GEOMETRY; store as JSON string in tests
      type: isSqlite ? DataTypes.TEXT : (DataTypes as any).GEOMETRY('POINT', 4326),
      allowNull: true,
      ...(isSqlite
        ? {
            get(this: Location) {
              const raw = this.getDataValue('geom') as any;
              if (!raw) return null as any;
              try { return typeof raw === 'string' ? JSON.parse(raw) : raw; } catch { return raw; }
            },
            set(this: Location, val: any) {
              try { this.setDataValue('geom', typeof val === 'string' ? val : JSON.stringify(val)); } catch { this.setDataValue('geom', val as any); }
            }
          }
        : {})
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: 'Location',
    tableName: 'locations',
    timestamps: true,
    hooks: {
      beforeSave: (location: Location) => {
        if (location.latitude && location.longitude) {
          const point = { type: 'Point', coordinates: [location.longitude, location.latitude] };
          (location as any).geom = isSqlite ? JSON.stringify(point) : point;
        }
      }
    },
    indexes: [
      {
        fields: ['latitude', 'longitude'],
      },
    ],
  }
);

export default Location;