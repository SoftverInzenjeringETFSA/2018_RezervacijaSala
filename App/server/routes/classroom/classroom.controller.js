const DBC = require('../../utils/database-communication');
const Session = require('../../utils/session');
const Responses = require('../../utils/responses');
const Helpers = require('../../utils/helpers');

const checkForHexRegExp = new RegExp("^[0-9a-fA-F]{24}$");

const ClassroomController = (() => {

    const POST_Delete = (req, res) => {
        const user = req.body.user;
        const classroom = req.body.classroom;
        console.log(classroom);
        console.log(req.body);

        if(!checkForHexRegExp.test(classroom.id)) {
            res.json(Responses.INVALID_ID_FORMAT);
            return;
        }

        //Add administrator check after merge
        //Deleting classroom
        DBC.classroom.deleteOne(classroom.id).then( (response) => {
            if(response.deletedCount === 0) {
                res.json(Responses.NOT_FOUND);
                return;
            }
            res.json(Responses.CLASSROOM_DELETED);
        }, () => {
            res.json(Responses.UNKNOWN_ERROR);
            return;
        });
    }

    const POST_Search = (req, res) => {
        //const user = req.body.user;
        const name = req.body.name;
        const seatCount = req.body.seatCount;
        const equipment = req.body.equipment;
        const date = req.body.date;

        //Validating request parameters
        if(name == null && seatCount == null && equipment == null && date == null) {
            res.json(Responses.INVALID_PARAMETERS);
            return;
        }

        if(seatCount != null && seatCount <= 0) {
            res.json(Responses.INVALID_PARAMETERS);
            return;
        }

        if(date != null && Helpers.dateDiffInMS(new Date(), new Date(date))<=0) {
            res.json(Responses.INVALID_PARAMETERS);
            return;
        }

       /* if(!Session.checkUser(user)) {
            res.json(Responses.UNAUTHORIZED);
            return;
        }*/

        //Applying filter
        DBC.classroom.findAllByCriteria(name, seatCount, equipment, date).then((response) => {
            res.json(response);
        });
    }
    const POST_Create = (req, res) => {
      DBC.classroom.createClassroom(req.classroom);
    }
    return {
        POST_Delete: POST_Delete,
        POST_Search: POST_Search,
        POST_Create: POST_Create
    }
})();

module.exports = ClassroomController;
