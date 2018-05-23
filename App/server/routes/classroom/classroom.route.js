const express = require('express');
const ClassroomRouter = express.Router();
const ClassroomController = require('./classroom.controller');

ClassroomRouter.post('/delete', ClassroomController.POST_Delete);
ClassroomRouter.post('/search', ClassroomController.POST_Search);
module.exports = ClassroomRouter;