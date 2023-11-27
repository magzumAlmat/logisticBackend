'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ProposalBaskets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      arrivalDate: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      proposalBasketStatus: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      proposalBasket_weight: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      proposalBasket_volume: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      proposalBasket_stock_status: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      car_registration_number: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      Proposal_Id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Proposals',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      
      
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('ProposalBaskets');
  },
};



