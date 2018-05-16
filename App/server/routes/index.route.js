const express = require('express');

const IndexRouter = express.Router();
const AuthRouter = require('./auth/auth.route');
const ScheduleRouter = require('./schedule/schedule.route');
const ReservationRouter = require('./reservation/reservation.route');

// TODO: Remove after frontend development starts.
const TestRouter = require('./test/test.route');
IndexRouter.use('/test', TestRouter);

IndexRouter.use('/auth', AuthRouter);
IndexRouter.use('/schedule', ScheduleRouter);
IndexRouter.use('/reservation', ReservationRouter);

module.exports = IndexRouter;