const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('bookingappointment','root','@dbquery123',{
    host:"localhost",
    dialect:"mysql"
});

module.exports = sequelize;