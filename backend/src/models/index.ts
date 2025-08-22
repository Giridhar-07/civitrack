import User from './User';
import Issue from './Issue';
import Location from './Location';
import StatusLog from './StatusLog';
import Flag from './Flag';
import StatusRequest from './StatusRequest';
import sequelize from '../config/database';

// Define associations between models

// User associations
User.hasMany(Issue, { foreignKey: 'reportedBy', as: 'issues' });
User.hasMany(StatusLog, { foreignKey: 'userId', as: 'statusLogs' });
User.hasMany(Flag, { foreignKey: 'userId', as: 'flags' });
User.hasMany(StatusRequest, { foreignKey: 'requestedBy', as: 'statusRequests' });
User.hasMany(StatusRequest, { foreignKey: 'reviewedBy', as: 'reviewedStatusRequests' });

// Issue associations
Issue.belongsTo(User, { foreignKey: 'reportedBy', as: 'user' });
Issue.belongsTo(Location, { foreignKey: 'locationId', as: 'location' });
Issue.hasMany(StatusLog, { foreignKey: 'issueId', as: 'statusLogs' });
Issue.hasMany(Flag, { foreignKey: 'issueId', as: 'flags' });
Issue.hasMany(StatusRequest, { foreignKey: 'issueId', as: 'statusRequests' });

// Location associations
Location.hasMany(Issue, { foreignKey: 'locationId', as: 'issues' });

// StatusLog associations
StatusLog.belongsTo(Issue, { foreignKey: 'issueId', as: 'issue' });
StatusLog.belongsTo(User, { foreignKey: 'userId', as: 'user' });

// StatusRequest associations
StatusRequest.belongsTo(Issue, { foreignKey: 'issueId', as: 'issue' });
StatusRequest.belongsTo(User, { foreignKey: 'requestedBy', as: 'requester' });
StatusRequest.belongsTo(User, { foreignKey: 'reviewedBy', as: 'reviewer' });

// Flag associations
Flag.belongsTo(Issue, { foreignKey: 'issueId', as: 'issue' });
Flag.belongsTo(User, { foreignKey: 'userId', as: 'user' });

// Function to sync all models with the database
export const syncModels = async (force: boolean = false): Promise<void> => {
  try {
    await sequelize.sync({ force });
    console.log('Database synced successfully');
  } catch (error) {
    console.error('Error syncing database:', error);
    throw error;
  }
};

export { User, Issue, Location, StatusLog, Flag, StatusRequest };