const DBC = require('../../utils/database-communication');
const Session = require('../../utils/session');
const Responses = require('../../utils/responses');
const ScheduleFormatValidator = require('./schedule.validator');

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

        DBC.schedule.create(schedule).then(() => {
            res.json(Responses.SCHEDULE_CREATED({id: 123}));
        })

    };

    const POST_Edit = (req, res) => {
        const checkForHexRegExp = new RegExp("^[0-9a-fA-F]{24}$");
        const user = req.body.user;
        // const schedule = req.body.schedule;
        const id = req.body.id;

        if(!Session.checkUser(user)) {
            res.json(Responses.UNAUTHORIZED);
            return;
        }

        if(!checkForHexRegExp.test(id)) {
            res.json(Responses.INVALID_SCHEDULE_ID_FORMAT);
            return;
        }

        DBC.schedule.findOne(id).then((foundSchedule) => {
            if(!foundSchedule) {
                res.json(Responses.NOT_FOUND);
                return;
            }
            res.json(foundSchedule);
        },() => {
            console.log('Errror')
        })

    };

    return {
        POST_Create: POST_Create,
        POST_Edit: POST_Edit,
    }
})();

module.exports = ScheduleController;