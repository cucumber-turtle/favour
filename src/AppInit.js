import * as React from 'react';
import * as SecureStore from 'expo-secure-store';
import firebase from '@react-native-firebase/app';
import { getAuth, signInWithCustomToken, signInWithEmailAndPassword, verifyIdToken } from "firebase/auth";
import { Alert } from "react-native";
import * as config from '../android/app/google-services';

// get authentication token from firebase and save to usertoken
export function authenticate (email, password) {
    // Authenticate using firebase and get token
    const firebaseApp = firebase.initializeApp(config);
    const auth = getAuth(firebaseApp);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        Alert.alert(
              "Alert Title",
              "My Alert Msg",
              [
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
              ]
              );
        return user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert(
                      "oops",
                      "I guess authentication doesnt work",
                      [
                        {
                          text: "Cancel",
                          onPress: () => console.log("Cancel Pressed"),
                          style: "cancel"
                        },
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                      ]
                      );
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