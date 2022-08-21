import React from 'react';
import { View, Text, TextInput, StatusBar } from 'react-native';
import Styles from '../components/Styles'

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