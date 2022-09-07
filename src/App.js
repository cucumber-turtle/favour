import { Text, View, TextInput, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import firebase from '@react-native-firebase/app';
//import { getAuth } from "firebase/auth";
import auth from '@react-native-firebase/auth';

import AppInit from './AppInit';
import SignInScreen from './screens/SignInScreen';
import HomeBrowseScreen from './screens/HomeBrowseScreen';
import Styles from './components/Styles';

const config = {
        clientId: "202917236551-8bhr77m85u5vnqj3s7cd69amcu8j49a1.apps.googleusercontent.com",
        appId: "1:202917236551:android:fe55fb4189bc66593c0662",
        apiKey: "AIzaSyAtnXjp3FG_EGTCa8GcMDLSi5_G0bkT8VM",
        databaseURL: "",
        storageBucket: "favour-ed17d.appspot.com",
        messagingSenderId: "202917236551",
        projectId: "favour-ed17d",
        persistence: true,
    }

export default function App({ navigation }) {
    //let auth;
    let state;
    let firebaseApp;
        if (firebase.apps.length) {
            firebaseApp = firebase.app();
//            auth = getAuth(firebaseApp);
//            state = AppInit();
        } else {
            firebaseApp = firebase.initializeApp(config)
                .then((firebaseApp) => {
                    auth = getAuth(firebaseApp);
                    state = AppInit();
                })
                .catch((error) => console.log("Error! "+error.message));
        }
        auth()
          .signInWithEmailAndPassword('test', 'test')
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

    if (!state) {
        // Empty screen? No valid firebase authentication
        // App basically cannot work
        return (
        <>
            <StatusBar barStyle = "dark-content" hidden = {false}/>
        </>
        );
    }

    return (
        <>
        <StatusBar barStyle = "dark-content" hidden = {false}/>
        <>
            {state.isSignOut ? (
                <HomeBrowseScreen style = {Styles.container} />
            ) : (
                <SignInScreen firebaseAuth = {auth} style = {Styles.container} />
            ) }
        </>
        </>
            );
//        <NavigationContainer>
//            <Navigator>
//                  {isAuthenticated ? (
//                    <Screen name="Home Browse" component={HomeBrowseScreen} />
//                  ) : (
//                    <Screen name="Sign In" component={SignInScreen} />
//                  )}
//            </Navigator>
//        </NavigationContainer>
}
