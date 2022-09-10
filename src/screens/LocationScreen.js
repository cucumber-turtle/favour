/** Library imports */
import { Alert, Text, View, TextInput, Button, ScrollView } from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
/** Project imports */
import Styles from '../components/Styles';
import {uploadEntry} from '../AppInit'

function confirm_entry (entry) {
    Alert.alert(
            "Is this right?",
            "Please check that everything is correct before submitting, it cannot be edited later.\n"
            + "Title: " + entry.title + "\nDescription: " + entry.description
            + "\nRequirements: " + entry.requirements
            + "\nLocation: " + entry.location,
        [{ text: "Submit", style: "confirm", onPress: () => {uploadEntry(entry)},},
         {text: "Edit", style: "cancel", }, ],
        {cancelable: true,}
        );
}

const LocationScreen = ({ navigation, route }) => {
    const [location, setLocation] = useState('');

    let entry = route.params.entry;

    useEffect(() => {
        entry.location = location;
    });

    return (
        <>
        <View
            style={[Styles.container, {flexDirection: "row"}]}>
            <Button
                title="Details"
                onPress={() => navigation.navigate("Details", {entry: entry})}
                />
            <Icon name="caret-forward" size={40}/>
            <Text style={Styles.title}>Location</Text>
            <Icon name="caret-forward" size={40}/>
            <Button
                title="Confirm"
                onPress={() => confirm_entry(entry)}
                />
        </View>
        <ScrollView>
            <Text style={Styles.header}>Relevant address</Text>
            <TextInput
                style={Styles.input}
                multiline={true}
                placeholder="The address the volunteer needs to go to"
                value={location}
                onChangeText={setLocation}
                />
        </ScrollView>
        </>
      );
}

export default LocationScreen;