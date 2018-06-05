const express = require('express');
const AuthRouter = express.Router();
const AuthController = require('./auth.controller');

AuthRouter.post('/login', AuthController.POST_Login);
AuthRouter.post('/registration', AuthController.POST_Registration);
AuthRouter.post('/logout', AuthController.POST_Logout);

module.exports = AuthRouter;
