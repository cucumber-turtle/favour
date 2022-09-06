import React, {useState} from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import Styles from '../components/Styles';
import AppInit, {useAuthContext} from '../AppInit';

const SignInScreen = () => {
    // Hooks for temporarily storing username and password to be processed
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { signIn } = useAuthContext;

    return (
    <View style={Styles.container}>
          <Image
            style={Styles.tinyLogo}
            source={require("../../assets/FAVour.png")}
            />
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
          <Button title="Sign in" onPress={() => signIn.Provider.signIn(username, password)} />
        </View>
    )
}

export default SignInScreen