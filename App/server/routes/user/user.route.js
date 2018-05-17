const express = require('express');
const UserRouter = express.Router();
const UserController = require('./user.controller');

UserRouter.post('/create', UserController.POST_Create);
UserRouter.post('/login', UserController.LOGIN);
UserRouter.post('/logout', UserController.LOGOUT);

module.exports = UserRouter;