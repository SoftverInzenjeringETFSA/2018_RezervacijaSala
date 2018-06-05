import { AsyncStorage } from 'react-native'

export const USER_KEY = 'auth-key'

// Set some AUTH key when user signs in
export const onSignIn = (token) => AsyncStorage.setItem(USER_KEY, token);
// Remove AUTH key when user signs out
export const onSignOut = () => AsyncStorage.removeItem(USER_KEY);

// Used to check if user is already signed in
export const isSignedIn = () => {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(USER_KEY)
        .then(res => {
            resolve(res);
        })
        .catch(err => reject(err));
    });
  };


/*  Saving username  */
var username = null;
export const getUsername = () => {
  return new Promise((resolve, reject) => {
    if(username != null){
      resolve(username);
    } else {

    AsyncStorage.getItem("username")
      .then(res => {
        username = res;
        resolve(username);
      })
      .catch(err => reject(err));
    }
  })
}
export const setUsername = (username) => AsyncStorage.setItem("username", username);
