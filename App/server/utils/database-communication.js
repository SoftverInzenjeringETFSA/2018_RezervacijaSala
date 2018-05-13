const MongoWrapper = require('./database.config');

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

    const createSchedule = (schedule) => {
        return new Promise((resolve, reject) => {
            MongoWrapper((dbo, callback) => {
                dbo.collection("schedule").insertOne(schedule, (err, res) => {
                    if (err) {
                        console.log(err);
                        reject();
                    };
                    console.log("Schedule inserted");
                    callback();
                    resolve();
                  });
            });
        });
    }


    return {
        checkUser: checkUser,
        schedule: {
            create: createSchedule
        }
    }
})();

module.exports = DBC;