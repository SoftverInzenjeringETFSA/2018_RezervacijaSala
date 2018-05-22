const express = require('express');

const IndexRouter = express.Router();
const AuthRouter = require('./auth/auth.route');
const ScheduleRouter = require('./schedule/schedule.route');
<<<<<<< HEAD
const ReservationRouter = require('./reservation/reservation.route');
=======
const SemesterRouter = require('./semester/semester.route');
>>>>>>> master

// TODO: Remove after frontend development starts.
const TestRouter = require('./test/test.route');
IndexRouter.use('/test', TestRouter);

IndexRouter.use('/auth', AuthRouter);
IndexRouter.use('/schedule', ScheduleRouter);
<<<<<<< HEAD
IndexRouter.use('/reservation', ReservationRouter);
=======
IndexRouter.use('/semester', SemesterRouter);
>>>>>>> master

module.exports = IndexRouter;