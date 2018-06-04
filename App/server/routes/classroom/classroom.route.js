const express = require('express');
const ClassroomRouter = express.Router();
const ClassroomController = require('./classroom.controller');

ClassroomRouter.post('/delete', ClassroomController.POST_Delete);
ClassroomRouter.post('/search', ClassroomController.POST_Search);
ClassroomRouter.post('/create', ClassroomController.POST_Create);
ClassroomRouter.get('/getClassroom', ClassroomController.GET_GetClassroom);

module.exports = ClassroomRouter;
