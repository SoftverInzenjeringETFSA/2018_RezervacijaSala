const express = require('express')
const router = express.Router()
const controller = require('./reservation.controller')

const DBC = require('../../utils/database-communication')

// route middleware that will happen on every request (if needed)
router.use((request, response, next) => {
    console.log('This gets executed before any other route request')
    next()
})

// USKLADITI SA SRS-OM!
router.post('/cancel', (request, response) => {
    console.log('Cancel reservation route')

    // check user rights

    // rezervacija
    const reservation = request.body

    DBC.reservation.deleteOne(reservation.id).then((message) => {
        console.log('Uraaa!')

        response.json({
            message: message
        })
    })

})

module.exports = router