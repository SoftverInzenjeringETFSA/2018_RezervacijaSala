const _ = require('lodash');
/*
    Object schedule:
        {string} name : Name of the schedule
        {number} day: number between 0 and 6 corresponding to one day of the week
            0 - Mo
            1 - Tu
            2 - We
            3 - Th
            4 - Fr
            5 - Sa
            6 - Su
        {number} h : 0-23 hours
        {number} min : 0-59 minutes
        {string} userId : _id of User Object
        {string} semesterId : _id of Semester Object
        {string} classroomId : _id of Classroom Object
*/
const ScheduleFormatValidator = (schedule) => {

    if(_.size(schedule) !== 7) {
        return false;
    }

    if(!_.has(schedule,'name') ||
    !_.has(schedule,'day') ||
    !_.has(schedule,'h') ||
    !_.has(schedule,'min') ||
    !_.has(schedule,'userId') ||
    !_.has(schedule,'semesterId') ||
    !_.has(schedule,'classroomId')) {
        return false;
    }

    if(!_.isString(schedule.name) ||
    !_.isString(schedule.userId) ||
    !_.isString(schedule.classroomId) ||
    !_.isString(schedule.semesterId) ||
    !_.isInteger(schedule.day) ||
    !_.isInteger(schedule.h) ||
    !_.isInteger(schedule.min)) {
        return false;
    }

    if(schedule.day < 0 || schedule.day > 6 ||
        schedule.h < 0 || schedule.h > 23 || 
        schedule.min < 0 || schedule.min > 59) {
        return false;
    }

    if(schedule.name.length > 128 || schedule.name.length === 0) {
        return false;
    }

    return true;
}

const getDate = (day, month, year, h, min) => {
    const monthLengths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (year % 4 === 0) {
        monthLengths[1] = 29;
    }
    if (month < 1 || month > 12) {
        return false;
    }
    if (day < 1 || day > monthLengths[month-1] || year < 2018 || year > 3000 ||
    h < 0 || h > 23 || min < 0 || min > 59) {
        return false;
    }

    return new Date(year, month - 1, day, h, min);
}

module.exports = ScheduleFormatValidator;