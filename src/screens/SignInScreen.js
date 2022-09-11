/** Library imports */
import React, {useState} from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
/** Project imports */
import Styles from '../components/Styles';
import {authenticate} from '../AppInit';

const SignInScreen = ({ navigation }) => {
    // Hooks for temporarily storing username and password to be processed
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
    <View style={Styles.container}>
          <Image
            style={Styles.bigLogo}
            source={require("../../assets/FAVour.png")}
            />
          <Text style={Styles.header1}>Enter your login details!</Text>
          <TextInput
            style={Styles.input}
            placeholder="Email"
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
            title="Sign up"
            onPress={() => navigation.navigate("Sign up")}
            />
          <View style={Styles.spaceHorizontal}/>
          <Button
            title="Sign in"
            onPress={() => (username && password) ? authenticate(username, password) : 0}
            />
        </View>
    )
}

export default SignInScreen