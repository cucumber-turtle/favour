import React, {useState} from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import Styles from '../components/Styles';
import AppInit, {AuthContext} from '../AppInit';

// immediately authenticate using firebase, dont save password

const SignInScreen = () => {
    // Hooks for temporarily storing username and password to be processed
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { isAuthenticated, signIn, signOut, signUp } = React.useContext(AuthContext);

    return (
    <View style={Styles.container}>
          <Text>Enter your login details!</Text>
          <TextInput
            style={Styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
            />
          <TextInput
            style={Styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            />
          <Button title="Sign in" onPress={() => signIn} />
        </View>
    )
}

export default SignInScreen