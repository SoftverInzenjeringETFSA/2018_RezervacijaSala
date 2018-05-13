const _ = require('lodash');
// name userid semesterid classroomid isrepeating date
const ScheduleFormatValidator = (schedule) => {

    if(_.size(schedule) !== 10) {
        return false;
    }

    if(!_.has(schedule,'name') ||
    !_.has(schedule,'day') ||
    !_.has(schedule,'month') ||
    !_.has(schedule,'year') ||
    !_.has(schedule,'h') ||
    !_.has(schedule,'min') ||
    !_.has(schedule,'userId') ||
    !_.has(schedule,'semesterId') ||
    !_.has(schedule,'classroomId') ||
    !_.has(schedule,'isRepeating')) {
        return false;
    }

    if(!_.isString(schedule.name) ||
    !_.isString(schedule.userId) ||
    !_.isString(schedule.classroomId) ||
    !_.isString(schedule.semesterId) ||
    !_.isInteger(schedule.day) ||
    !_.isInteger(schedule.month) ||
    !_.isInteger(schedule.year) ||
    !_.isInteger(schedule.h) ||
    !_.isInteger(schedule.min) ||
    !_.isBoolean(schedule.isRepeating)) {
        return false;
    }

    const date = getDate(schedule.day, schedule.month, schedule.year, schedule.h, schedule.min);

    if(!date) {
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