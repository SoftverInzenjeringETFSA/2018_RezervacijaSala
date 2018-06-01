const express = require('express');
const ClassroomRouter = express.Router();
const ClassroomController = require('./classroom.controller');

ClassroomRouter.post('/delete', ClassroomController.POST_Delete);
ClassroomRouter.post('/search', ClassroomController.POST_Search);
ClassroomRouter.post('/create', ClassroomController.POST_Create);

module.exports = ClassroomRouter;
