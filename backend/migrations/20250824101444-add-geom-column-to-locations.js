'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS postgis;');
    await queryInterface.addColumn('locations', 'geom', {
      type: Sequelize.GEOMETRY('POINT', 4326),
      allowNull: true,
    });
    await queryInterface.addIndex('locations', ['geom'], {
      name: 'location_geom_idx',
      using: 'GIST',
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeIndex('locations', 'location_geom_idx');
    await queryInterface.removeColumn('locations', 'geom');
  }
};
