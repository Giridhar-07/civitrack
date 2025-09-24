'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Core auth/verification columns
    await queryInterface.addColumn('users', 'isEmailVerified', {
      type: Sequelize.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    });

    await queryInterface.addColumn('users', 'emailVerificationToken', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('users', 'emailVerificationExpires', {
      type: Sequelize.DATE,
      allowNull: true,
    });

    await queryInterface.addColumn('users', 'resetPasswordToken', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('users', 'resetPasswordExpires', {
      type: Sequelize.DATE,
      allowNull: true,
    });

    // Optional: account lock status used by middleware
    try {
      await queryInterface.addColumn('users', 'isLocked', {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      });
    } catch (e) {
      // Column may already exist in some environments; ignore
    }

    // Helpful indexes for token lookups
    await queryInterface.addIndex('users', ['emailVerificationToken'], { name: 'users_email_verification_token_idx' });
    await queryInterface.addIndex('users', ['resetPasswordToken'], { name: 'users_reset_password_token_idx' });
  },

  async down (queryInterface, Sequelize) {
    // Drop indexes first
    try { await queryInterface.removeIndex('users', 'users_email_verification_token_idx'); } catch (e) {}
    try { await queryInterface.removeIndex('users', 'users_reset_password_token_idx'); } catch (e) {}

    // Remove columns (ignore if not present)
    try { await queryInterface.removeColumn('users', 'resetPasswordExpires'); } catch (e) {}
    try { await queryInterface.removeColumn('users', 'resetPasswordToken'); } catch (e) {}
    try { await queryInterface.removeColumn('users', 'emailVerificationExpires'); } catch (e) {}
    try { await queryInterface.removeColumn('users', 'emailVerificationToken'); } catch (e) {}
    try { await queryInterface.removeColumn('users', 'isEmailVerified'); } catch (e) {}
    try { await queryInterface.removeColumn('users', 'isLocked'); } catch (e) {}
  }
};