const express = require('express');
const IndexRouter = express.Router();
const AuthRouter = require('./auth/auth.route');
const TestRouter = require('./test/test.route');

IndexRouter.use('/auth', AuthRouter);
IndexRouter.use('/test', TestRouter);

module.exports = IndexRouter;