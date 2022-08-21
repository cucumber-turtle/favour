import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput } from 'react-native';
import SignInScreen from './src/screens/SignInScreen';
import Styles from './src/components/Styles';

export default function App() {
  return (
    <SignInScreen style = {Styles.container} />

  );
}
