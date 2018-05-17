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

    const findUser = (id) => {
        return new Promise((resolve, reject) => {
            MongoWrapper((dbo, callback) => {
                dbo.collection('user').findOne({_id: new ObjectId(id)}, (error, response) => {
                    if (error)
                        reject()
                    
                    console.log('User found')
                    callback()
                    resolve(response)
                })
            })
        })
    }

    const findRole = (id) => {
        return new Promise((resolve, reject) => {
            MongoWrapper((dbo, callback) => {
                dbo.collection('role').findOne({_id: new ObjectId(id)}, (error, response) => {
                    if (error)
                        reject()
                    
                    console.log('Role found')
                    callback()
                    resolve(response)
                })
            })
        })
    }

    const createSemester = (semester) => {
        return new Promise((resolve, reject) => {
            MongoWrapper((dbo, callback) => {
                dbo.collection('semester').insertOne(semester, (error, response) => {
                    if (error) {
                        console.log(error)
                        reject()
                    }

                    console.log('Semester created')
                    callback()
                    resolve(response)
                })
            })
        })
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


    return {
        checkUser: checkUser,
        user: {
            findOne: findUser
        },
        role: {
            findOne: findRole
        },
        semester: {
            create: createSemester,
            findOne: findSemester
        },
        schedule: {
            create: createSchedule,
            findOne: findSchedule
        }
    }
})();

module.exports = DBC;