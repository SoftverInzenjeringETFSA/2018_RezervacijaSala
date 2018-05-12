const express = require('express');
const ScheduleRouter = express.Router();
const ScheduleController = require('./schedule.controller');

ScheduleRouter.post('/create', ScheduleController.POST_Create);
ScheduleRouter.post('/edit', ScheduleController.POST_Edit);

module.exports = ScheduleRouter;