require('ts-node/register');
const sequelize = require('../src/config/database.ts').default;

module.exports = {
  development: {
    ...sequelize.options,
    database: sequelize.config.database,
    username: sequelize.config.username,
    password: sequelize.config.password,
    host: sequelize.config.host,
    port: sequelize.config.port,
    dialect: sequelize.options.dialect,
  },
  test: {
    ...sequelize.options,
    database: sequelize.config.database,
    username: sequelize.config.username,
    password: sequelize.config.password,
    host: sequelize.config.host,
    port: sequelize.config.port,
    dialect: sequelize.options.dialect,
  },
  production: {
    ...sequelize.options,
    database: sequelize.config.database,
    username: sequelize.config.username,
    password: sequelize.config.password,
    host: sequelize.config.host,
    port: sequelize.config.port,
    dialect: sequelize.options.dialect,
  },
};