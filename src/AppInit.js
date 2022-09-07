import * as React from 'react';
import * as SecureStore from 'expo-secure-store';

import auth from '@react-native-firebase/auth';
import { signInWithCustomToken, signInWithEmailAndPassword, verifyIdToken } from "firebase/auth";
import { Alert } from "react-native";

// get authentication token from firebase and save to usertoken
export function authenticate (email, password) {
    // Authenticate using firebase and get token
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

// Authentication flow referenced from: https://reactnavigation.org/docs/auth-flow/

export default function AppInit () {
       const [state, dispatch] = React.useReducer(
               (prevState, action) => {
                 switch (action.type) {
                   case 'RESTORE_TOKEN':
                     return {
                       ...prevState,
                       userToken: action.token,
                       isLoading: false,
                     };
                   case 'SIGN_IN':
                     return {
                       ...prevState,
                       isSignOut: false,
                       userToken: action.token,
                     };
                   case 'SIGN_OUT':
                     return {
                       ...prevState,
                       isSignOut: true,
                       userToken: null,
                     };
                 }
               },
               {
                 isLoading: true,
                 isSignOut: false,
                 userToken: null,
               }
             );

       React.useEffect(() => {
          // Fetch the token from storage then navigate to our appropriate place
          const bootstrapAsync = async () => {
            let userToken;

            try {
              userToken = await SecureStore.getItemAsync('userToken');
              if (userToken) {
                // After restoring token validate it in firebase
                verifyIdToken(userToken.getIdToken())
                  .then(function(decodedToken) {
                      var uid = decodedToken.uid;
                      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
                    })
              }
            } catch (e) {
              // Restoring token failed
            }
          };

          bootstrapAsync();
            }, []);

       return state;
}