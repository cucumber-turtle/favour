/** Library imports */
import React, {useState} from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
/** Project imports */
import Styles from '../components/Styles';
import {authenticate} from '../AppInit';

const SignInScreen = () => {
    // Hooks for temporarily storing username and password to be processed
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
    <View style={Styles.container}>
          <Image
            style={Styles.bigLogo}
            source={require("../../assets/FAVour.png")}
            />
          <Text style={Styles.header}>Enter your login details!</Text>
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
          <Button
            title="Sign in"
            onPress={() => (username && password) ? authenticate(username, password) : 0}
            />
        </View>
    )
}

export default SignInScreen