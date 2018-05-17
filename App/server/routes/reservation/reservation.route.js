const express = require('express')
const router = express.Router()
const controller = require('./reservation.controller')

const DBC = require('../../utils/database-communication')

// route middleware that will happen on every request (if needed)
router.use((request, response, next) => {
    console.log('This gets executed before any other route request')
    next()
})

// JSON Format - for Postman request
/*
    {
        "userId": "enter valid mongodb user id",
        "reservationId": "enter valid mongodb reservation id"
    }
*/
router.post('/cancel', (request, response) => {
    console.log('Cancel reservation route')

    const userId = request.body.userId
    const reservationId = request.body.reservationId
    
    // Check user rights; only administrator and professor can cancel reservation
    DBC.user.findOne(userId).then((foundUser) => {
        // check user role
        DBC.role.findOne(foundUser.roleId).then((foundRole) => {
            if(foundRole.name != 'administrator' && foundRole.name != 'nastavnik') {
                response.json({ 
                    error: 'Insufficient privileges'
                })
                return
            }

            // User is either administrator or professor; has rights to cancel reservation

            DBC.reservation.deleteOne(reservationId).then((message) => {
                console.log('Uraaa!')
        
                response.json({
                    message: message
                })
            })
        })
    })
})

module.exports = router