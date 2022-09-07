/** Library imports */
import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
/** Firebase imports */
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
/** Project imports */
import SignInScreen from './screens/SignInScreen';
import HomeBrowseScreen from './screens/HomeBrowseScreen';
import Styles from './components/Styles';

const Tab = createBottomTabNavigator();

export default function App({ navigation }) {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, []);

    return (
        <>
            <StatusBar barStyle = "dark-content" hidden = {false}/>
            <NavigationContainer>
                <Tab.Navigator>
                  {user ? (
                    <Tab.Screen name="Home" component={HomeBrowseScreen}/>
                  ) : (
                    <Tab.Screen name="Home" component={SignInScreen}/>
                  )}
                </Tab.Navigator>
            </NavigationContainer>
            </>
        );
}
