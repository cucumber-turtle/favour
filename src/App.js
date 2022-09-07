import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import firebase from '@react-native-firebase/app';
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
    let firebaseApp;
        if (firebase.apps.length) {
            firebaseApp = firebase.app();
        } else {
            firebaseApp = firebase.initializeApp(config)
                .catch((error) => console.log("Error! "+error.message));
        }

    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    return (
        <>
        <StatusBar barStyle = "dark-content" hidden = {false}/>
        <>
            {user ? (
                <HomeBrowseScreen style = {Styles.container} />
            ) : (
                <SignInScreen style = {Styles.container} />
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
