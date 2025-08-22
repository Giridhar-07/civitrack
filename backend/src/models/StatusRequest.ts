import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../config/database';
import User from './User';
import Issue from './Issue';
import { IssueStatus } from '../types/enums';

// StatusRequest attributes interface
interface StatusRequestAttributes {
  id: string;
  issueId: string;
  requestedBy: string;
  currentStatus: string;
  requestedStatus: string;
  reason?: string;
  status: 'pending' | 'approved' | 'rejected';
  reviewedBy?: string;
  reviewedAt?: Date;
  reviewComment?: string;
  createdAt: Date;
  updatedAt: Date;
}

// StatusRequest creation attributes interface (optional fields during creation)
interface StatusRequestCreationAttributes extends Optional<StatusRequestAttributes, 'id' | 'status' | 'reviewedBy' | 'reviewedAt' | 'reviewComment' | 'createdAt' | 'updatedAt'> {}

// StatusRequest model class
class StatusRequest extends Model<StatusRequestAttributes, StatusRequestCreationAttributes> implements StatusRequestAttributes {
  public id!: string;
  public issueId!: string;
  public requestedBy!: string;
  public currentStatus!: string;
  public requestedStatus!: string;
  public reason?: string;
  public status!: 'pending' | 'approved' | 'rejected';
  public reviewedBy?: string;
  public reviewedAt?: Date;
  public reviewComment?: string;
  public createdAt!: Date;
  public updatedAt!: Date;
}

// Initialize StatusRequest model
StatusRequest.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    issueId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'issues',
        key: 'id',
      },
    },
    requestedBy: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    currentStatus: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [
          [
            IssueStatus.REPORTED,
            IssueStatus.UNDER_REVIEW,
            IssueStatus.IN_PROGRESS,
            IssueStatus.RESOLVED,
            IssueStatus.CLOSED,
          ],
        ],
      },
    },
    requestedStatus: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [
          [
            IssueStatus.REPORTED,
            IssueStatus.UNDER_REVIEW,
            IssueStatus.IN_PROGRESS,
            IssueStatus.RESOLVED,
            IssueStatus.CLOSED,
          ],
        ],
      },
    },
    reason: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM('pending', 'approved', 'rejected'),
      allowNull: false,
      defaultValue: 'pending',
    },
    reviewedBy: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    reviewedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    reviewComment: {
      type: DataTypes.TEXT,
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
    modelName: 'StatusRequest',
    tableName: 'status_requests',
    timestamps: true,
  }
);

// Associations are defined in models/index.ts

export default StatusRequest;