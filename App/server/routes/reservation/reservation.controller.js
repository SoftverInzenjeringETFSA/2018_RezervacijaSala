const DBC = require('../../utils/database-communication');
const Session = require('../../utils/session');
const Responses = require('../../utils/responses');
const Helpers = require('../../utils/helpers');

const Controller = (() => {
    // logic goes here

    const POST_CreateReservation = (req, res) => {
        var reservation = req.body;
        DBC.classroom.findOne(reservation.classRoomId).then((foundClassRoom) => {
            if(!foundClassRoom) {
                res.json(Responses.NOT_FOUND);
                return;
            }
            let reservations = [];
            reservations.push(reservation);
            DBC.reservation.create(reservations).then(() => {
                res.json(Responses.RESERVATION_CREATED(reservations.length));
            })
        
        },() => {
            res.json(Responses.UNKNOWN_ERROR);
                return;
        })
    
}

    const GET_Reservations = (req, res) => {
      var classId = req.params.id;
        DBC.reservation.getAll(classId).then((foundReservations) => {
            if(!foundReservations) {
                res.json(Responses.NOT_FOUND);
                return;
            }
            res.send(foundReservations);

        },() => {
            res.json(Responses.UNKNOWN_ERROR);
                return;
        })
    }
    return {
        POST_CreateReservation: POST_CreateReservation,
        GET_Reservations: GET_Reservations
    }
})()
module.exports = Controller;

/*
JEDAN REZ:
http://localhost:5000/api/reservation/getall/5afda6f7734d1d3038e87c17

VISE REZ:
http://localhost:3000/api/reservation/getall/5af976334ca82212a833cb99

Classroom not found:
http://localhost:3000/api/reservation/createReservation
{
    "_id": "5afc22b6734d1d5b9d6f8618",
    "length": "1",
    "reservedAt": "ISODate('2017-12-25T07:20:00Z')",
    "reservedUntil": "ISODate('2017-12-25T08:45:00Z')",
    "classRoomId": "5af976334ca82212a833cb91",
    "userReservedId": "1",
    "scheduleBlockId": "1"
}

1 records have been inserted into reservation collection:
http://localhost:3000/api/reservation/createReservation
{
    "_id": "5afc22b6734d1d5b9d6f8618",
    "length": "1",
    "reservedAt": "ISODate('2017-12-25T07:20:00Z')",
    "reservedUntil": "ISODate('2017-12-25T08:45:00Z')",
    "classRoomId": "5af976334ca82212a833cb99",
    "userReservedId": "1",
    "scheduleBlockId": "1"
} */