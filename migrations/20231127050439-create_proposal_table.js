'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Proposals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      company_name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      broker_company_name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      routeA: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      routeB: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      proposal_number: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      cargo_name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      cargo_place: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      cargo_weight: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      cargo_volume: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      rate_usd: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      rate_kzt: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      payment_status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      local_expenses_description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      local_expenses_price: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      proposal_status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      usd_exchange_rates: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Proposals');
  },
};
