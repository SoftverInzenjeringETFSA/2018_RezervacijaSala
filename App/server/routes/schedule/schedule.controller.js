const DBC = require('../../utils/database-communication');
const Session = require('../../utils/session');
const Responses = require('../../utils/responses');

const ScheduleController = (() => {
    const POST_Create = (req, res) => {
        const user = req.body.user;
        const schedule = req.body.schedule;

        if(!Session.checkUser(user)) {
            res.json(Responses.UNAUTHORIZED);
            return;
        }

        DBC.schedule.create(schedule).then(() => {
            res.json({response: 'OK'});
        })

    };

    const POST_Edit = (req, res) => {
        const user = req.body.user;
        const schedule = req.body.schedule;

        if(!Session.checkUser(user)) {
            res.json(Responses.UNAUTHORIZED);
            return;
        }

        DBC.schedule.create(schedule).then(() => {
            res.json({response: 'OK'});
        })

    };

    return {
        POST_Create: POST_Create,
        POST_Edit: POST_Edit,
    }
})();

module.exports = ScheduleController;