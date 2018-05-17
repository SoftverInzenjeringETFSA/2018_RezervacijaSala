const DBC = require('../../utils/database-communication');
const Session = require('../../utils/session');
const Responses = require('../../utils/responses');
const Helpers = require('../../utils/helpers');
const bcrypt = require('bcryptjs');
const saltRounds = 10;

const UserController = (() => {
    const POST_Create = (req, res) => {
        const data = req.body.user;
        DBC.user.findOne(data.email).then((foundUser) => {
            if(foundUser){
                res.json(Response.USER_EXISTS);
                return;
            }
        
        });
        let password = data.passwordRegistration;
        let username = data.username;
        let name = data.name;
        let email = data.email;
        let role = data.role;
			bcrypt.genSaltSync(saltRounds, function(err, salt) {
				bcrypt.hashSync(password, salt, function(err, hash) {  
				   let user = {
                    "Name": name,
                    "Username":username,
                    "Email": email,
                    "Role": role,
					"Password":hash
				   };
                   DBC.user.create(user).then(() => {
                    res.json(Responses.USER_CREATED(1));
                })
            
            },() => {
                res.json(Responses.UNKNOWN_ERROR);
                    return;
            })
        })
    };
    const LOGIN = (req,res) => {
        const data = req.body.user;
        DBC.user.findOne(data.email).then((foundUser)=>{
            if(!foundUser){
                res.json(Response.NOT_FOUND)
                return;
            } 
            let password = foundUser.Password;
                bcrypt.compareSync(req.body.password,password,function(err,isMatch){
                    if(!isMatch) {          
                        res.render('notFound', {
                            title : "Oops, password is not correct"
                            });
                        }
                    
                        var user = foundUser;
                        var token = jwt.sign({
                                    _id:user.Id,
                                    user:user.Username,
                                    expiresInMinutes: 1440},
                                    "My_secret"
                            );
                        // return the information including token as JSON
                        Session.addUser(user);
                        res.json({
                        success: true,
                        });
                });
            });
    }

    const LOGOUT = (req,res) => {
        const data = req.body.user;
        
        DBC.user.findOne(data.email).then((foundUser)=>{
            if(!foundUser){
                res.json(Response.NOT_FOUND)
                return;
            } 
            Session.removeUser(foundUser);
            });
    }
})();

module.exports = UserController;
