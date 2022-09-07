/** Library imports */
import auth from '@react-native-firebase/auth';
import { signInWithEmailAndPassword } from "firebase/auth";

/** Function to authenticate user with email and password */
export function authenticate (email, password) {
    auth()
          .signInWithEmailAndPassword(email, password)
          .then(() => {
            console.log('User signed in!');
          })
          .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
              console.log('That email address is already in use!');
            }

            if (error.code === 'auth/invalid-email') {
              console.log('That email address is invalid!');
            }

            console.error(error);
          });
}