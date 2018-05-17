const MongoWrapper = require('./database.config');
const ObjectId = require('mongodb').ObjectID;
const DBC = (() => {
    /**
     * @param {any} user User Object(username, password)
     * @returns 
     */
    const checkUser = (user) => {
        // Dummy
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(user.username === 'belmin' && user.password === 'password') {
                    resolve(true);
                } else {
                    reject();
                }
            }, 100);
        });
        
    }

    const findSemester = (id) => {
        return new Promise((resolve, reject) => {
            MongoWrapper((dbo, callback) => {
                dbo.collection('semester').findOne({_id: new ObjectId(id)}, (err, res) => {
                    if (err) {
                        console.log(err);
                        reject();
                    };
                    console.log('Semester found');
                    callback();
                    resolve(res);
                    });
            });
        });
    }

    const createSchedule = (schedule) => {
        return new Promise((resolve, reject) => {
            MongoWrapper((dbo, callback) => {
                dbo.collection('schedule').insertMany(schedule, (err, res) => {
                    if (err) {
                        console.log(err);
                        reject();
                    };
                    console.log('Inserted ' + schedule.length + ' records for given schedule');
                    callback();
                    resolve();
                  });
            });
        });
    }

    const findSchedule = (id) => {
        
        return new Promise((resolve, reject) => {
            MongoWrapper((dbo, callback) => {
                dbo.collection('schedule').findOne({_id: new ObjectId(id)}, (err, res) => {
                    if (err) {
                        console.log(err);
                        reject();
                    };
                    console.log('Schedule found');
                    callback();
                    resolve(res);
                    });
            });
        });
    }

    const updateSchedule = (id, schedule) => {
        
        return new Promise((resolve, reject) => {
            MongoWrapper((dbo, callback) => {
                dbo.collection('schedule').updateOne({_id: new ObjectId(id)},{$set: schedule}, (err, res) => {
                    if (err) {
                        console.log(err);
                        reject();
                    };
                    console.log('Schedule updated');
                    callback();
                    resolve(res);
                    });
            });
        });
    }

    const getScheduleFromTo = (fromDate, toDate) => {
        
        return new Promise((resolve, reject) => {
            MongoWrapper((dbo, callback) => {
                console.log('testing');
                dbo.collection('schedule').find({"date":  {
                    $gte: new Date(fromDate),
                    $lte: new Date(toDate)}}).toArray((err, res) => {
                        if (err) {
                            console.log(err);
                            reject();
                        };
                        callback();
                        resolve(res);
                        });
            });
        });
    }

    //Classroom logic

    //Deleting all related objects tied to classroom with provided ID (reservations/schedule entries)
    const deleteRelatedObjects = (id) => {
        return new Promise((resolve,reject) => {
            let errors = [];
            let counterForAsync = 0;
            MongoWrapper((dbo, callback) => {
                //Deleting related reservations
                dbo.collection('reservation').deleteMany({ classRoomId: id}, (err, res) => {
                    if(err) {
                        console.log(err);
                    } else {
                        counterForAsync++;
                        if(counterForAsync === 2) {
                            if (errors.length) {
                                reject(errors);
                            }
                        } else {
                            callback();
                            resolve()
                        }
                    }
                });
                //Deleting related schedule entries
                dbo.collection('schedule').deleteMany({ classroomId: id}, (err, res) => {
                    if(err) {
                        console.log(err);
                        errors.push(err);
                    } else {
                        counterForAsync++;
                        if(counterForAsync === 2) {
                            if (errors.length) {
                                reject(errors);
                            }
                        } else {
                            callback();
                            resolve()
                        }
                    }                        
                });
            });
        });
    }

    const deleteClassroom = (id) => {
        return new Promise((resolve, reject) => {
            MongoWrapper((dbo, callback) => {
                dbo.collection('classroom').deleteOne({ _id: new ObjectId(id)}, (err, res) => {
                    if(err) {
                        console.log(err);
                        reject();
                    }
                    deleteRelatedObjects(id);
                    callback();
                    resolve(res);
                });
            });
        });
    }
    

    //Search
    /* Tried all these, mongo saves those dates as strings apparently
    
        reservedAt : new Date("2017-12-22T08:15:00Z").getTime()
        reservedAt: new Date("2017-12-22T08:15:00Z")
        reservedAt: { $gt: new Date("2017-12-22T08:15:00Z"), $lt: new Date("2017-12-22T08:15:00Z")}
        reservedAt: "2017-12-22T08:15:00Z"
        reservedAt: { $gte: new Date()}
        reservedAt: { $lte: new Date("2017-12-22T08:15:00Z").getTime() }
        reservedAt: { $lte: Date.now() }
        reservedAt: { $lte: new Date() }              
    */

    const findClassroomsReservedAt = (date) => {
        return new Promise((resolve, reject) => {
            MongoWrapper((dbo,callback) => {
                dbo.collection('reservation').find( {
                    reservedAt: { $lte: new Date(date) },
                    reservedUntil: { $gte: new Date(date) }
                }).toArray((err, res) => {
                    if (err) {
                        console.log(err);
                        reject();
                    };
                    callback();
                    resolve(res);
                });
            });
        });
    }

    //TODO: Add filter by equipment and time available 
    const findAllByCriteria = (name, seatCount, equipment, time) => {
    var _nameRegex = (name == null) ? new RegExp(/.*?/) : new RegExp("^.*" +name+".*", 'i');
    var _seatCount = (seatCount == null) ? 0 : seatCount;
    var _equipmentIds = (equipment == null) ? [] : [];
    //var resultArray = [];
    //findClassroomsReservedAt(time).then(function(x) { resultArray = x; console.log("result array: ", resultArray);});
    var _timeIds = (time == null) ? [] : [];
        return new Promise((resolve, reject) => {
            MongoWrapper((dbo, callback) => {
                dbo.collection('classroom').find( {
                    $and: [
                        { name: { $regex: _nameRegex } },
                        { seatCount: { $gte: _seatCount} },
                        { _id: { $nin: _equipmentIds }},
                        { _id: { $nin: _timeIds }}
                    ]}).toArray((err, res) => {
                        if (err) {
                            console.log(err);
                            reject();
                        };
                        callback();
                        resolve(res);
                    });
            });
        });
    }

    return {
        checkUser: checkUser,
        semester: {
            findOne: findSemester
        },
        schedule: {
            create: createSchedule,
            findOne: findSchedule,
            update: updateSchedule,
            getFromTo: getScheduleFromTo
        },
        classroom: {
            deleteOne: deleteClassroom,
            deleteRelatedObjects: deleteRelatedObjects,
            findAllByCriteria: findAllByCriteria
        }
    }
})();

module.exports = DBC;