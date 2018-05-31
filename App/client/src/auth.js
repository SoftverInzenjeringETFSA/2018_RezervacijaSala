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
          if (res !== null) {
            resolve(true);
          } else {
            resolve(false);
          }
        })
        .catch(err => reject(err));
    });
  };
