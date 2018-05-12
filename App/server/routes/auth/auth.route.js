const express = require('express');
const AuthRouter = express.Router();
const AuthController = require('./auth.controller');

AuthRouter.post('/login', AuthController.POST_Login);

module.exports = AuthRouter;