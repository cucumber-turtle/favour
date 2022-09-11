/** Library imports */
import auth from '@react-native-firebase/auth';
import { signInWithEmailAndPassword, updateEmail, updateProfile } from "firebase/auth";
import firestore, { doc, getDoc } from '@react-native-firebase/firestore';
import { Alert } from 'react-native';
/** Project imports */
import FavourEntry from './components/FavourEntry';

function convertToFavour (data) {
    let favour = new FavourEntry("","","","","");
    favour.title = data.Title;
    favour.requirements = data.Requirements;
    favour.imagePath = data.Image;
    favour.description = data.Description;
    favour.location = data.Location;
    return favour;
}

export async function getEntries () {
    let allEntries = [];
    let entries = await firestore().collection("FavourEntries").get();
    let favour;
    entries.forEach((doc) => {
        favour = convertToFavour(doc.data());
        allEntries.push(favour);
    });

    return allEntries;
}

export function uploadEntry (entry) {
    firestore()
      .collection("FavourEntries")
      .add({
        Title: entry.title,
        Description: entry.description,
        Image: "assets/images/water.jpg",
        Location: entry.location,
        Requirements: entry.requirements,
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

/** Function to change user details */
export function changeProfile(name, email, username, password) {
    auth()
        .signInWithEmailAndPassword(username, password)
        .then(function(userCredential) {
            userCredential.user.updateEmail(email);
            userCredential.user.updateProfile({
                "displayName": name
              });
        }).catch(error => {
          showAlert("Invalid login", "Invalid username or password.", "Cancel");
        });
}