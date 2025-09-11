'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const table = await queryInterface.describeTable('users');

    if (!table.isEmailVerified) {
      await queryInterface.addColumn('users', 'isEmailVerified', {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      });
    }
    if (!table.emailVerificationToken) {
      await queryInterface.addColumn('users', 'emailVerificationToken', {
        type: Sequelize.STRING,
        allowNull: true,
      });
    }
    if (!table.emailVerificationExpires) {
      await queryInterface.addColumn('users', 'emailVerificationExpires', {
        type: Sequelize.DATE,
        allowNull: true,
      });
    }
    if (!table.resetPasswordToken) {
      await queryInterface.addColumn('users', 'resetPasswordToken', {
        type: Sequelize.STRING,
        allowNull: true,
      });
    }
    if (!table.resetPasswordExpires) {
      await queryInterface.addColumn('users', 'resetPasswordExpires', {
        type: Sequelize.DATE,
        allowNull: true,
      });
    }
  },

  async down (queryInterface, Sequelize) {
    const table = await queryInterface.describeTable('users');

    if (table.resetPasswordExpires) {
      await queryInterface.removeColumn('users', 'resetPasswordExpires');
    }
    if (table.resetPasswordToken) {
      await queryInterface.removeColumn('users', 'resetPasswordToken');
    }
    if (table.emailVerificationExpires) {
      await queryInterface.removeColumn('users', 'emailVerificationExpires');
    }
    if (table.emailVerificationToken) {
      await queryInterface.removeColumn('users', 'emailVerificationToken');
    }
    if (table.isEmailVerified) {
      await queryInterface.removeColumn('users', 'isEmailVerified');
    }
  }
};
