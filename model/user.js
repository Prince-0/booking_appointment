const { DataTypes } = require('sequelize');
const sequelize = require('./database');

const Users = sequelize.define('users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  contact: {
    type: DataTypes.BIGINT,
    allowNull: false
  }
}, {
  timestamps: false
});

module.exports = Users;
