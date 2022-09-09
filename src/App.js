/** Library imports */
import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
/** Firebase imports */
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
/** Project imports */
import SignInScreen from './screens/SignInScreen';
import HomeBrowseScreen from './screens/HomeBrowseScreen';
import SearchScreen from './screens/SearchScreen';
import AddEntryScreen from './screens/AddEntryScreen';
import ProfileScreen from './screens/ProfileScreen';
import Styles, {idleColour, activeColour} from './components/Styles';

export const Tab = createBottomTabNavigator();

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
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                      tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === "Home") {
                            iconName = "home";
                        } else if (route.name === "Search") {
                            iconName = "search";
                        } else if (route.name === "Add Entry") {
                            iconName = "add-circle-sharp";
                        } else if (route.name === "Profile") {
                            iconName = "person-circle";
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                      },
                      tabBarActiveTintColor: Styles.activeColour,
                      tabBarInactiveTintColor: Styles.idleColour,
                    })}
                >
                  {user ? (
                    <>
                    <Tab.Screen name="Home" component={HomeBrowseScreen}/>
                    <Tab.Screen name="Search" component={SearchScreen}/>
                    <Tab.Screen name="Add Entry" component={AddEntryScreen}/>
                    <Tab.Screen name="Profile" component={ProfileScreen}
                        initialParams={{currUser: user}}/>
                    </>
                  ) : (
                    <Tab.Screen name="Sign in" component={SignInScreen}/>
                  )}
                </Tab.Navigator>
            </NavigationContainer>
            </>
        );
}
