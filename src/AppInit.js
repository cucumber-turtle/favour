/** Library imports */
import auth from '@react-native-firebase/auth';
import { signInWithEmailAndPassword } from "firebase/auth";
import firestore from '@react-native-firebase/firestore';
import { StyleSheet, Alert } from "react-native";

const entries = firestore().collection("FavourEntries");

export function uploadEntry (entry) {
    firestore()
      .collection("FavourEntries")
      .add({
        title: entry.title,
        description: entry.description,
        image: "assets/images/water.jpg",
        location: entry.location,
        requirements: entry.requirements,
      })
      .then(() => {
        console.log("Entry added!");
      });
}

export function showAlert (title, message, cancel) {
    Alert.alert(
        title,
        message,
    [{ text: cancel, style: "cancel", },],
    {cancelable: true,}
    );
}

/** Function to authenticate user with email and password */
export function authenticate (email, password) {
    auth()
          .signInWithEmailAndPassword(email, password)
          .then(() => {
            console.log('User signed in!');
          })
          .catch(error => {
            showAlert("Invalid login", "Invalid username or password.", "Cancel");
          });
}

/** Function to log out the user */
export function signOut () {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
}

export {entries};