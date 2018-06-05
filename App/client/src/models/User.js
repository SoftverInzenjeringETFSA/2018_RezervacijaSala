import apiHelper from '../utils/apiHelper.js';
import { onSignIn } from '../auth.js'

export default class User {
  constructor(user){
    this.username = user.username;
    this.password = user.password;
    this.token = user.token;
  }

  static login(email, password) {
    return apiHelper('/auth/login', "POST", {
      user:{
        username: email,
        password: password
      }
    }).then(response => response.json())
  }

  static registration(email, password){
    return apiHelper('/auth/registration', "POST", {
      user:{
        username: email,
        password: password
      }
    })
    .then(response => response.json())
  }
  static logout(email){
    return apiHelper('/auth/logout', "POST",{
      user:{
        username: email,
        token: 'token'
      }
    })
    .then(response => response.json())
  }
}
