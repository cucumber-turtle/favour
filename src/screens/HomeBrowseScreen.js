/** Library imports */
import React, { useState } from 'react';
import { Text, View, TextInput, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
/** Project imports */
import FilmStrip from '../components/FilmStrip';
import FavourEntry from '../components/FavourEntry';
import Styles from '../components/Styles';
import {getEntries} from '../AppInit';

const HomeBrowseScreen = () => {
    const [entries, setEntries] = useState({});
    getEntries().then(a => setEntries(a)).catch(e => console.log(e));

    if (!entries) {
        //loading screen
    }

    const scroll1 = entries ? FilmStrip(entries) : undefined;
    const scroll2 = scroll1;
    return (
        <>
            <Text style={Styles.title}> Browse </Text>
            <Text style={Styles.header}> New! </Text>
            {scroll1}
            <Text style={Styles.header}> Nearby </Text>
            {scroll2}
        </>
    );
}

export default HomeBrowseScreen;