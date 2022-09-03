import { Text, View, TextInput, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import * as React from 'react';
import * as SecureStore from 'expo-secure-store';

import SignInScreen from './src/screens/SignInScreen';
import Styles from './src/components/Styles';

const AuthContext = React.createContext();

// Authentication flow referenced from: https://reactnavigation.org/docs/auth-flow/
export default function App({ navigation }) {
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
            } catch (e) {
              // Restoring token failed
            }

            // After restoring token, we may need to validate it in production apps

            // This will switch to the App screen or Auth screen and this loading
            // screen will be unmounted and thrown away.
            dispatch({ type: 'RESTORE_TOKEN', token: userToken });
          };

          bootstrapAsync();
            }, []);

    const authContext = React.useMemo(
        () => ({
          signIn: async (data) => {
            // In a production app, we need to send some data (usually username, password) to server and get a token
            // We will also need to handle errors if sign in failed
            // After getting token, we need to persist the token using `SecureStore`
            // In the example, we'll use a dummy token

            dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
          },
          signOut: () => dispatch({ type: 'SIGN_OUT' }),
          signUp: async (data) => {
            // In a production app, we need to send user data to server and get a token
            // We will also need to handle errors if sign up failed
            // After getting token, we need to persist the token using `SecureStore`
            // In the example, we'll use a dummy token

            dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
          },
        }),
        []
      );

//    if (state.isLoading) {
//      // We haven't finished checking for the token yet
//      return <SplashScreen />;
//    }

    return (
        <>
        <StatusBar barStyle = "dark-content" hidden = {false}/>
        <SignInScreen style = {Styles.container} />
        </>
//            <NavigationContainer>
//                <Tab.Navigator>
//                      {state.userToken == null ? (
//                        <Tab.Screen name="Sign In" component={SignInScreen} />
//                      ) : (
//                        <Tab.Screen name="Home Browse" component={HomeBrowseScreen} />
//                      )}
//                </Tab.Navigator>
//            </NavigationContainer>
    );
}
