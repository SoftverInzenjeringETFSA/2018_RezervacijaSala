const express = require('express')
const router = express.Router()
const controller = require('./semester.controller.js')

const DBC = require('../../utils/database-communication')

router.post('/create', (request, response) => {
    console.log('Create semester route')

    const userId = request.body.userId
    const semester = request.body.semester

    // check user rights
    // only administrator has rights to create semester
    DBC.user.findOne(userId).then((foundUser) => {
        // check user role
        DBC.role.findOne(foundUser.roleId).then((foundRole) => {
            if(foundRole.name != 'administrator') {
                response.json({
                    error: 'Insufficient prvileges'
                })              
                return
            }

            // User is administrator; has rights to create semester

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
    })

    
    
})

module.exports = router