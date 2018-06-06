const MongoWrapper = require('./database.config');
const ObjectId = require('mongodb').ObjectID;
const DBC = (() => {
    /**
     * @param {any} user User Object(username, password)
     * @returns
     */
    const checkUser = (user) => {
        return new Promise((resolve, reject) => {
          MongoWrapper((dbo, callback) => {
            dbo.collection('user').findOne({
              username: user.username,
              password: user.password
            }, (error, response) => {
              if(error){
                reject()
                return
              }
              callback();
              if(response == null){
                resolve(false)
              } else {
                resolve(true)
              }
            })
          })
        });
    }

    const findUser = (id) => {
        return new Promise((resolve, reject) => {
            MongoWrapper((dbo, callback) => {
                dbo.collection('user').findOne({_id: new ObjectId(id)}, (error, response) => {
                    if (error){
                      reject()
                      return;
                    }

                    console.log('User found')
                    callback()
                    resolve(response)
                })
            })
        })
    }

    const createUser = (user) => {
        return new Promise((resolve, reject) => {
          MongoWrapper((dbo, callback) => {
            dbo.collection('user').findOne({ username: user.username }, (error, response) => {
              if (error){
                 reject(error)
                 return;
              }
              if(response == null){
                /*
                 TODO: Add unique constraint on username field, clear database
                 TODO: make role an id field
                */
                dbo.collection('user').insertOne({
                  username: user.username,
                  password: user.password,
                  role: 'Korisnik'
                }, (error, response) => {
                  if(error){
                    reject(error)
                    return;
                  }
                  callback()
                  resolve(true)
                })
              } else {
                  resolve(false)
              }
            })
          })


          // MongoWrapper((dbo, callback) => {
          //   dbo.collection('user').insertOne({user}, (error, response) => {
          //     if(error)
          //       reject();
          //
          //       console.log("User created");
          //       callback();
          //       resolve(response);
          //   });
          // })
        });
    };

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
                    resolve(response);
                })
            })
        })
    }

    const findSemester = (id) => {
        return new Promise((resolve, reject) => {
            MongoWrapper((dbo, callback) => {
                dbo.collection('semester').findOne({_id: new ObjectId(id)}, (error, response) => {
                    if (error) {
                        console.log(error);
                        reject()
                    };
                    console.log('Semester found')
                    callback()
                    resolve(response)
                })
            })
        })
    }

    const createSchedule = (schedule) => {
        return new Promise((resolve, reject) => {
            MongoWrapper((dbo, callback) => {
                dbo.collection('schedule').insertMany(schedule, (error, response) => {
                    if (error) {
                        console.log(error);
                        reject();
                    };
                    console.log('Inserted ' + schedule.length + ' records for given schedule');
                    callback();
                    resolve(response);
                  });
            });
        });
    }

    const findSchedule = (id) => {

        return new Promise((resolve, reject) => {
            MongoWrapper((dbo, callback) => {
                dbo.collection('schedule').findOne({_id: new ObjectId(id)}, (error, response) => {
                    if (error) {
                        console.log(error);
                        reject();
                    };
                    console.log('Schedule found');
                    callback();
                    resolve(response);
                    });
            });
        });
    }

    // logic for reservations
    const findReservation = (id) => {
        return new Promise((resolve, reject) => {
            MongoWrapper((dbo, callback) => {
                dbo.collection('reservation').findOne({ _id: new ObjectId(id)}, (error, response) => {
                    if (error) {
                        console.log(error)
                        reject
                    }

                    console.log('Reservation found')
                    callback()
                    resolve(response)
                })
            })
        })
    }

    const removeReservation = (id) => {
        return new Promise((resolve, reject) => {
            MongoWrapper((dbo, callback) => {
                dbo.collection('reservation').deleteOne({ _id: new ObjectId(id)}, (error, response) => {
                    if (error) {
                        console.log(error)
                        reject
                    }

                    callback()
                    resolve('Reservation canceled successfuly')
                })
            })
        })
    }

    const getAllReservations = (classId) => {
        return new Promise((resolve, reject) => {
            MongoWrapper((dbo, callback) => {
                 dbo.collection("reservation").find({ classRoomId: classId }).toArray(function(err, result) {
                    if (err) throw err;
                    console.log(result);
                    callback()
                    resolve(result);
                 });

            })
        })
    }

    const getAllClassrooms = () => {
        console.log("Funkcija getAllClassrooms");
        return new Promise((resolve, reject) => {
          MongoWrapper((dbo,callback) => {
            dbo.collection('classroom').find().toArray(function(err, result) { //provjeriti ovu kolekciju, i provjeriti funkciju findAll()
              if(err) throw err;
              console.log("Greska u funkciji 'getAllClassrooms'" + result);
              callback();
              resolve(result);
            });
          });
        });
    }


    const createReservation = (reservation) => {
        return new Promise((resolve, reject) => {
            MongoWrapper((dbo, callback) => {
                dbo.collection('reservation').insertMany(reservation, (error, response) => {
                    if (error) {
                        console.log(error);
                        reject();
                    };
                    console.log('Inserted ' + reservation.length + ' records for given reservation');
                    callback();
                    resolve(response);
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

    const findClassRoom = (id) => {
        return new Promise((resolve, reject) => {
            MongoWrapper((dbo, callback) => {
                dbo.collection('classroom').findOne({_id: new ObjectId(id)}, (err, res) => {
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

    const createClassroom = (classroom) => {
      return new Promise((resolve, reject) => {
          MongoWrapper((dbo, callback) => {
              dbo.collection('classroom').insertOne(classroom, (error, response) => {
                  if (error) {
                      console.log(error);
                      reject();
                  };
                  console.log('Inserted ' + classroom.name + ' classroom');
                  callback();
                  resolve(response);
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
        user: {
            create: createUser,
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
            findOne: findSchedule,
            update: updateSchedule,
            getFromTo: getScheduleFromTo
        },
        classroom: {
            findOneClassRoom: findClassRoom,
            deleteOne: deleteClassroom,
            deleteRelatedObjects: deleteRelatedObjects,
            findAllByCriteria: findAllByCriteria,
            create: createClassroom,
            getAll: getAllClassrooms
        },
        reservation: {
            findOne: findReservation,
            deleteOne: removeReservation,
            create: createReservation,
            getAll: getAllReservations
        }
    }
})();

module.exports = DBC;
