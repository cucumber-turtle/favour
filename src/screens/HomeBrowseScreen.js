/** Library imports */
import { Text, View, TextInput, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
/** Project imports */
import FilmStrip from '../components/FilmStrip';
import FavourEntry from '../components/FavourEntry';
import Styles from '../components/Styles';
import {getEntries} from '../AppInit';

const HomeBrowseScreen = () => {
    let allEntries= getEntries();

    const scroll1 = FilmStrip(allEntries);
    const scroll2 = FilmStrip([new FavourEntry("h","h","h","h","h")]);
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