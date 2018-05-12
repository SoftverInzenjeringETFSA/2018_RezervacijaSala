const DBC = (() => {
    /**
     * @param {any} user User Object(username, password)
     */
    const checkUser = (user) => {
        // Dummy
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(user.username === 'Belmin' && user.password === 'Password') {
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