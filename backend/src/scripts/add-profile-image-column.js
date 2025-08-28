// Script to add profileImage column to users table
require('dotenv').config();
const { Sequelize } = require('sequelize');

// Database configuration - use exact values from .env
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;
const dbPort = parseInt(process.env.DB_PORT || '5432', 10);
const dbSSL = true; // Force SSL for Neon database

// Create Sequelize instance
const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  port: dbPort,
  dialect: 'postgres',
  dialectOptions: {
    ssl: dbSSL ? {
      require: true,
      rejectUnauthorized: false
    } : false
  },
  logging: console.log
});

async function addProfileImageColumn() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    
    // Add profileImage column to users table
    await sequelize.query('ALTER TABLE users ADD COLUMN IF NOT EXISTS "profileImage" VARCHAR(255);');
    console.log('profileImage column added successfully to users table');
    
    await sequelize.close();
  } catch (error) {
    console.error('Error adding profileImage column:', error);
  }
}

addProfileImageColumn();