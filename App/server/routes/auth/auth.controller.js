const DBC = require('../../utils/database-communication');
const Session = require('../../utils/session');
const Responses = require('../../utils/responses');

const AuthController = (() => {
    const POST_Login = (req, res) => {
        const user = req.body.user;

        DBC.checkUser(user).then((response) => {

            if(!Session.addUser({username: user.username, role:'admin',token: 'token'})) {
                res.json(Responses.USER_ALREADY_LOGGED_IN);
                return;
            }
        
            res.json({username: user.username, role:'admin',token: 'token'});
        }, () => {
            res.json(Responses.INVALID_CREDENTIALS);
        });
    };
    
    return {
        POST_Login: POST_Login,
    }
})();

module.exports = AuthController;