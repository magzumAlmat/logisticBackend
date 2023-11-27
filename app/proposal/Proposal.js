const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

// const User = require("../../auth/User");

const Proposal = sequelize.define('Proposal', {

  company_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  broker_company_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  routeA: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  routeB: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  proposal_number: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  cargo_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  cargo_place: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  cargo_weight: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  cargo_volume: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  rate_usd: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  rate_kzt: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },


  payment_status: {
    type: DataTypes.STRING,
    allowNull: false,
  },



  local_expenses_description: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  local_expenses_price: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  proposal_status: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  usd_exchange_rates: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },





});


module.exports = Proposal;