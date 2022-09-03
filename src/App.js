import { Text, View, TextInput, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AppInit from './AppInit';

import SignInScreen from './screens/SignInScreen';
import Styles from './components/Styles';

export default function App({ navigation }) {

//    if (state.isLoading) {
//      // We haven't finished checking for the token yet
//      return <SplashScreen />;
//    }

    AppInit();

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
