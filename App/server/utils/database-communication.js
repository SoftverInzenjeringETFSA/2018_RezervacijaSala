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

    // ScheduleController
    const createSchedule = (schedule) => {
        // Dummy
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(true);
            }, 100);
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