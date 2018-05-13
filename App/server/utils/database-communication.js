const MongoWrapper = require('./database.config');

const DBC = (() => {
    /**
     * @param {any} user User Object(username, password)
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

    return {
        checkUser: checkUser,
    }
})();

module.exports = DBC;