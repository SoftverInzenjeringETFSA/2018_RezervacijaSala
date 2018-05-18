const DBC = require('../../utils/database-communication');
const Session = require('../../utils/session');
const Responses = require('../../utils/responses');
const Helpers = require('../../utils/helpers');
const bcrypt = require('bcryptjs');
const saltRounds = 10;

const UserController = (() => {
    const POST_Create = (req, res) => {
        const data = req.body.user;
        DBC.user.findOne(data.username).then((foundUser) => {
            if(foundUser){
                res.json(Response.USER_EXISTS);
                return;
            }
            else{
                console.log("Creating user");
                let password = data.password;
                let username = data.username;
                let name = data.name;
                let email = data.email;
                let role = data.role;
                        let user = {
                            "Name": name,
                            "Username":username,
                            "Email": email,
                            "Role": role,
                            "Password":password
                        };
                        DBC.user.create(user).then(() => {
                            res.json(Responses.USER_CREATED(1));
                        })                
            }
        });
        
    };
    const LOGIN = (req,res) => {
        const data = req.body.user;
        DBC.user.findOne(data.username).then((foundUser)=>{
            console.log(foundUser);
            if(!foundUser){
                res.json(Responses.NOT_FOUND)
                return;
            } 
            let password = foundUser.password;
                bcrypt.compareSync(data.password,password,function(err,isMatch){
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
        
        DBC.user.findOne(data.username).then((foundUser)=>{
            if(!foundUser){
                res.json(Response.NOT_FOUND)
                return;
            } 
            Session.removeUser(foundUser);
            });
    }

    return{
        POST_Create: POST_Create,
        LOGIN: LOGIN,
        LOGOUT : LOGOUT        
    }
})();

module.exports = UserController;
