// tab navigator for chyron
// stack navigator for chat page
// tab navigator (top) for saved/browse pages
// horizontal scrolling container
/** Library imports */
import { Text, View, TextInput, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
/** Project imports */
import FilmStrip from '../components/FilmStrip';

const HomeBrowseScreen = () => {
    const scroll1 = FilmStrip([0,2]);
    return (
        <>
            <Text> Home screen :) </Text>
            {scroll1}
        </>
    );
}

export default HomeBrowseScreen;