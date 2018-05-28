import apiHelper from '../utils/apiHelper.js';
export default class User {

  static login(email, password){
    apiHelper('/auth/login', "POST", {
      user:{
        username: "belmin",
        password: "password"
      }
    })
    .then(response => response.json())
    .then(responseJson => console.log("Response: ", responseJson))
    .catch(error => console.log("Error: ", error))
  }
}
