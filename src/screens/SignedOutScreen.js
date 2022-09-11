/** Library imports */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
/** Project imports */
import Styles from '../components/Styles';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';

const Stack = createNativeStackNavigator();

const SignedOutScreen = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false}}>
        <Stack.Screen
          name="Sign in"
          component={SignInScreen}
        />
        <Stack.Screen
          name="Sign up"
          component={SignUpScreen}
        />
      </Stack.Navigator>
      );
}

export default SignedOutScreen;