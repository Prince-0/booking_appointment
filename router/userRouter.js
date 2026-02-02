const express = require('express');
const Router = express.Router();

const userController = require('../controller/userController');

Router.get('/',userController.getUser);
Router.post('/',userController.postUser);
Router.post('/addingStudentwithCard',userController.addingValuetoUserandIdentityTable);
Router.post('/department', userController.addDepartment);
Router.delete('/:id',userController.deleteUser);

module.exports = Router;