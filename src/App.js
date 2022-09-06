import { Text, View, TextInput, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AppInit, {useAuthContext} from './AppInit';
import SignInScreen from './screens/SignInScreen';
import HomeBrowseScreen from './screens/HomeBrowseScreen';
import Styles from './components/Styles';

export default function App({ navigation }) {

    // Loading any stored tokens
    const state = AppInit();
    const { signIn, signOut, signUp } = useAuthContext;

//    if (state.isLoading) {
//      // We haven't finished checking for the token yet
//      return <SplashScreen />;
//    }

    return (
        state
//        <>
//        <StatusBar barStyle = "dark-content" hidden = {false}/>
//        <>
//            {state.isSignOut ? (
//                <HomeBrowseScreen style = {Styles.container} />
//            ) : (
//                <SignInScreen style = {Styles.container} />
//            ) }
//        </>
//        </>
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
