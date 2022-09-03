import * as React from 'react';
import * as SecureStore from 'expo-secure-store';
import { getAuth, signInWithCustomToken, signInWithEmailAndPassword, verifyIdToken } from "firebase/auth";

// get authentication token from firebase and save to usertoken
function authenticate (email, password) {
    // Authenticate using firebase and get token
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        return user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
}

// Authentication flow referenced from: https://reactnavigation.org/docs/auth-flow/

// AuthContext to expose needed methods
export const AuthContext = React.createContext('');

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

       // usememo to keep expensive functions from needlessly running
       const authContext = React.useMemo(
        () => ({
           isAuthenticated: false,
           signIn: async (name, pass) => {
               const signToken = authenticate(name, pass);
               dispatch({type: 'SIGN_IN', token: signToken});
           },
           signOut: () => dispatch({type: 'SIGN_OUT'}),
           signUp: async (name, pass) => {
               const signToken = authenticate(name, pass);
               dispatch({type: 'SIGN_IN', token: signToken});
           }
        }), []
       );

       return authContext;
}