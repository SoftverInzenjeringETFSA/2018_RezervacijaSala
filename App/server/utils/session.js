const Session = (() => {

    const loggedUsers = [];

    /**
     * @param {any} user User object(username)
     * @returns Boolean depending if the given user is present in the session
     */
    const checkUser = (user) => {
        return _findUser(user) !== undefined;
    }

    /**
     * @param {any} user User object(username, role, token)
     * @returns True if user is added to session or False if user is already logged in
     */
    const addUser = (user) => {

        if (!checkUser(user)) {
            loggedUsers.push(user);
            return true;
        } else {
            return false;
        }
    };

    /**
     * @param {any} user User object(username, role, token)
     * @returns True if user is removed from session or False if user was not logged in
     */
    const removeUser = (user) => {
        if(checkUser(user)) {
            console.log("user found - logout");
            const newarray = loggedUsers.filter((u) => {
                return !_compareUsers(user,u);
            });
            loggedUsers.splice(0, loggedUsers.length, ...newarray);
            return true;
        } else {

            return false;
        }
    };

    /**
     * @param {any} user1 User object(username, role, token)
     * @param {any} user2 User object(username, role, token)
     * @returns True if the users have the same username, role and token. Otherwise returns false.
     */
    const _compareUsers = (user1, user2) => {
        return user1.username === user2.username &&
                user1.token === user2.token;
    }

    /**
     * @param {any} user User object(username, role, token)
     * @returns User object if it is present in logged users. Otherwise returns undefined.
     */
    const _findUser = (user) => {
        const found = loggedUsers.find((u) => {
            return u.username === user.username &&
                    u.token === user.token;
        });
        return found;
    }

    return {
        checkUser: checkUser,
        addUser: addUser,
        removeUser: removeUser
    }
})();

module.exports = Session;
