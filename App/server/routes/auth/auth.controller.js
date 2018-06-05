const DBC = require('../../utils/database-communication');
const Session = require('../../utils/session');
const Responses = require('../../utils/responses');
const Validation = require('../../utils/validation');
const tokenHelper = require('../../utils/tokenHelper');

const AuthController = (() => {
    const POST_Login = (req, res) => {
      const user = req.body.user;
      if(!Validation.validateEmail(user.username) || !Validation.validatePassword(user.password)){
        res.json(Responses.INVALID_PARAMETERS);
        return;
      }
      DBC.checkUser(user).then((response) => {
        console.log(response);
        if(response){
          if(!Session.addUser({
            username: user.username,
            role: 'Admin',
            token: 'token'
          })) {
            res.json(Responses.USER_ALREADY_LOGGED_IN);
            return;
          }
          res.json(Responses.OK_WITH_TOKEN('token'));
        } else {
          res.json(Responses.INVALID_CREDENTIALS);
        }
      }).catch( (error) => {
        res.json(Responses.SERVER_ERROR);
      });
    };

    const POST_Registration = (req, res) => {
      const user = req.body.user;
      console.log(user);
      if(!Validation.validateEmail(user.username) || !Validation.validatePassword(user.password)){
        res.json(Responses.INVALID_PARAMETERS);
        return;
      }
      user.token = "token";
      console.log(user);
      DBC.user.create(user).then((response) => {
        console.log(response);
        if(response == true){
          var token = 'token';
          Session.addUser({username: user.username, role: 'Admin', token: token})
          res.json(Responses.OK_WITH_TOKEN(token));
        }
        else
          res.json(Responses.USER_ALREADY_CREATED);
      }).catch( (error) => {
        console.log("Greska");
        res.json(Responses.SERVER_ERROR);
      })
    };

    const POST_Logout = (req, res) => {
      const user = req.body.user;
      console.log(user);
      if(!Session.removeUser(user)){
          res.json(Responses.USER_ALREADY_LOGGED_OUT);
          return;
      }
      res.json(Responses.OK)

    };

    return {
      POST_Login: POST_Login,
      POST_Registration: POST_Registration,
      POST_Logout: POST_Logout
    }

})();

module.exports = AuthController;
