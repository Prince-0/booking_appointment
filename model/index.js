const Users = require('./user');
const IdentityCard = require('./identityCard');
const Department = require('./department');

Users.hasOne(IdentityCard, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

IdentityCard.belongsTo(Users, {
    foreignKey: 'userId'
});

Department.hasMany(Users, {
    foreignKey: 'departmentId',
    onDelete: 'SET NULL'
});

Users.belongsTo(Department, {
    foreignKey: 'departmentId'
});
console.log(
  Users.sequelize === IdentityCard.sequelize,
  Users.sequelize === Department.sequelize
);


module.exports = {
    Users,
    IdentityCard,
    Department
};
