const express = require('express');

const IndexRouter = express.Router();
const AuthRouter = require('./auth/auth.route');
const ScheduleRouter = require('./schedule/schedule.route');
const SemesterRouter = require('./semester/semester.route');

// TODO: Remove after frontend development starts.
const TestRouter = require('./test/test.route');
IndexRouter.use('/test', TestRouter);

IndexRouter.use('/auth', AuthRouter);
IndexRouter.use('/schedule', ScheduleRouter);
IndexRouter.use('/semester', SemesterRouter);

module.exports = IndexRouter;