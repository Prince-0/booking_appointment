const Users = require('./user');
const IdentityCard = require('./identityCard');
const Department = require('./department');
const Course = require('./course');
const UserCourse = require('./userCourse');


console.log(
  Users.sequelize === IdentityCard.sequelize,
  Users.sequelize === Department.sequelize
);

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

Users.belongsToMany(Course, {
  through: UserCourse,
  foreignKey: 'userId'
});

Course.belongsToMany(Users, {
  through: UserCourse,
  foreignKey: 'courseId'
});



module.exports = {
    Users,
    IdentityCard,
    Department,
    Course,
    UserCourse    
};
