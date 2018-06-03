const JWT = require('jsonwebtoken');
const secret = "The mystical man month";
module.exports = (user) => {
  return new Promise((resolve, reject) => {
      JWT.sign({ username: user.username }, secret, {}, (error, token) => {
        if(error){
          console.log("Error in tokenHelper.js: ", error);
          reject(error);
          return;
        }
        resolve(token);
    })
  }
}
