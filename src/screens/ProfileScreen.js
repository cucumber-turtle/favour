/** Library imports */
import React, {useState} from 'react';
import { Text, View, TextInput, StatusBar, Button, Modal, Pressable, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
/** Project imports */
import Styles from '../components/Styles';
import {signOut, changeProfile, showAlert} from '../AppInit';

const ProfileScreen = () => {
    const user = auth().currentUser;

    // Hooks for storing email and display name
    const [name, setName] = useState(user.displayName);
    const [email, setEmail] = useState(user.email);
    // Hooks for temporarily storing username and password to be processed
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // State to store modal visibility
    const [modalVisible, setModalVisible] = useState(false);

    function handleProfileChange () {
        setModalVisible(false);
        changeProfile(name, email, username, password);
        showAlert("Saved changes","","Ok");
    }

    return (
        <View style={Styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                  setModalVisible(!modalVisible);
                }}
              >
                <View style={Styles.centeredView}>
                  <View style={Styles.modalView}>
                    <Text>Enter your login details to confirm the following changes:</Text>
                    <Text>Display name:  {name + "\n"} Email:  {email+ "\n"}</Text>
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
                    <View style={{flexDirection: "row"}}>
                        <Pressable onPress={() => setModalVisible(!modalVisible)}>
                          <Text>Cancel</Text>
                        </Pressable>
                        <View style={Styles.spaceHorizontal} />
                        <Button title="Submit" onPress={() => handleProfileChange()}/>
                    </View>
                  </View>
                </View>
              </Modal>
            <Text style={Styles.title}>Name:</Text>
            <TextInput
                style={Styles.input}
                placeholder={user.displayName}
                value={name}
                onChangeText={setName}
                />
            <Text style={Styles.title}>Email:</Text>
            <TextInput
                style={Styles.input}
                placeholder={user.email}
                value={email}
                onChangeText={setEmail}
                />
            <Button title="Save changes" onPress={() => setModalVisible(true)} />
            <View style={Styles.spaceVertical} />
            <Button title="Sign out" onPress={() => signOut()} />
        </View>
    );
}

export default ProfileScreen;