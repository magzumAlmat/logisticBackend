const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const User = require("../../auth/User");
const Proposal=require('../proposal/Proposal')
const ProposalBasket = sequelize.define('ProposalBasket', {


  arrivalDate:{
    type:DataTypes.STRING,
    allowNull:true
},

  proposalBasketStatus:{
    type:DataTypes.STRING,
    allowNull:true
},

  proposalBasket_weight: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  proposalBasket_volume: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  proposalBasket_stock_status: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  car_registration_number: {
    type: DataTypes.STRING,
    allowNull: false,
  },

});

  ProposalBasket.hasMany(Proposal);
  Proposal.belongsTo(ProposalBasket);
module.exports = ProposalBasket;