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

    const createUser = (user) =>{
        return new Promise((resolve, reject) => {
            MongoWrapper((dbo, callback) => {
                dbo.collection('user').insert(user, (err, res) => {
                    if (err) {
                        console.log(err);
                        reject();
                    };
                    callback();
                    resolve();
                  });
            });
        });
    }
    const findUser = (username) =>{
        return new Promise((resolve, reject) => {
            MongoWrapper((dbo, callback) => {
                dbo.collection('user').findOne({username: username}, (err, res) => {
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
        user:{
            create: createUser,
            findOne: findUser
        }
    }
})();

module.exports = DBC;