const express = require('express')
const router = express.Router()
const controller = require('./semester.controller.js')

const DBC = require('../../utils/database-communication')

router.post('/create', (request, response) => {
    console.log('Create semester route')

    // check user rights
    // only administrator has rights to create semester

    const semester = request.body

    console.log(semester);
    
    // validate semester data
    // start and end date have to be correct
    // end date has to be after start date
    if(semester.beginsAt < Date.now() || semester.endsAt <= Date.now() || semester.beginsAt >= semester.endsAt) {
        response.json({
            message: 'Invalid date!'
        })
        return
    }
    
    // connect to database and create new semester
    DBC.semester.create(semester).then((message) => {
        console.log('Semester created successfuly')

        response.json(message)
    })
})

module.exports = router