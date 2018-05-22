const express = require('express');
const ScheduleRouter = express.Router();
const ScheduleController = require('./schedule.controller');

ScheduleRouter.post('/create', ScheduleController.POST_Create);
ScheduleRouter.post('/edit', ScheduleController.POST_Edit);
ScheduleRouter.post('/get_from_to', ScheduleController.POST_GETFROMTO);

module.exports = ScheduleRouter;