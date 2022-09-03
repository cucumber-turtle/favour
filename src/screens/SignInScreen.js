import React from 'react';
import { View, Text, TextInput, StatusBar } from 'react-native';
import Styles from '../components/Styles'
import { getAuth, signInWithCustomToken } from "firebase/auth";

// usestate hook for saving username
// immediately authenticate using firebase, dont save password
// get authentication token from firebase and save to usertoken

const SignInScreen = () => {
    return (
    <View style={Styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <TextInput style={Styles.input} />
          <StatusBar style="auto" />
        </View>
    )
}

export default SignInScreen