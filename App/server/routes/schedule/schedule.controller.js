const DBC = require('../../utils/database-communication');
const Session = require('../../utils/session');
const Responses = require('../../utils/responses');
const Helpers = require('../../utils/helpers');
const ScheduleFormatValidator = require('./schedule.validator');

const checkForHexRegExp = new RegExp("^[0-9a-fA-F]{24}$");

const ScheduleController = (() => {
    const POST_Create = (req, res) => {
        const user = req.body.user;
        const schedule = req.body.schedule;

        if(!Session.checkUser(user)) {
            res.json(Responses.UNAUTHORIZED);
            return;
        }

        if(!ScheduleFormatValidator(schedule)) {
            res.json(Responses.INVALID_SCHEDULE_FORMAT);
            return;
        }

        if(!checkForHexRegExp.test(schedule.semesterId)) {
            res.json(Responses.INVALID_ID_FORMAT);
            return;
        }

        DBC.semester.findOne(schedule.semesterId).then((foundSemester) => {
            if(!foundSemester) {
                res.json(Responses.NOT_FOUND);
                return;
            }
            let scheduleTime = Helpers.setDateToNextWeekday(foundSemester.beginsAt, schedule.day);
            let allSchedules = []

            while(scheduleTime.getTime() < foundSemester.endsAt.getTime()) {
                let entryForWeek = Object.assign({}, schedule);

                entryForWeek.date = new Date(scheduleTime);
                entryForWeek.date.setHours(schedule.h);
                entryForWeek.date.setMinutes(schedule.min);
                allSchedules.push(entryForWeek);
            	scheduleTime = Helpers.addDaysToDate(scheduleTime, 7);                
            }
            DBC.schedule.create(allSchedules).then(() => {
                res.json(Responses.SCHEDULE_CREATED(allSchedules.length));
            })
        
        },() => {
            res.json(Responses.UNKNOWN_ERROR);
                return;
        })
    };

    const POST_Edit = (req, res) => {
        const user = req.body.user;
        const schedule = req.body.schedule;
        const id = req.body.id;

        if(!Session.checkUser(user)) {
            res.json(Responses.UNAUTHORIZED);
            return;
        }

        if(!checkForHexRegExp.test(id)) {
            res.json(Responses.INVALID_ID_FORMAT);
            return;
        }

        if(!ScheduleFormatValidator(schedule)) {
            res.json(Responses.INVALID_SCHEDULE_FORMAT);
            return;
        }

        // SemesterID and UserID can not be mutated.
        delete schedule.semesterId;
        delete schedule.userId;
        DBC.schedule.update(id, schedule).then((response) => {
            if(response.n === 0) {
                res.json(Responses.NOT_FOUND);
                return;
            }
            

            res.json(Responses.OK);
        },() => {
            res.json(Responses.UNKNOWN_ERROR);
                return;
        })

    };

    const POST_GETFROMTO = (req, res) => {
        const user = req.body.user;
        const from = req.body.from;
        const to = req.body.to;

        if(!Session.checkUser(user)) {
            res.json(Responses.UNAUTHORIZED);
            return;
        }

        DBC.schedule.getFromTo(from, to).then((response) => {
            res.json(response);
        });
    }

    return {
        POST_Create: POST_Create,
        POST_Edit: POST_Edit,
        POST_GETFROMTO: POST_GETFROMTO,
    }
})();

module.exports = ScheduleController;
