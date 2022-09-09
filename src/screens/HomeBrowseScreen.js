// tab navigator for chyron
// stack navigator for chat page
// tab navigator (top) for saved/browse pages
// horizontal scrolling container
/** Library imports */
import { Text, View, TextInput, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
/** Project imports */
import FilmStrip from '../components/FilmStrip';
import FavourEntry, {entryOverlay} from '../components/FavourEntry';
import Styles from '../components/Styles';

const HomeBrowseScreen = () => {
    const hm = new FavourEntry("ok","test title","This is a test description");
    const scroll1 = FilmStrip([hm]);
    const scroll2 = scroll1;
    const overlay = entryOverlay(hm);
    return (
        <>
            {overlay}
            <Text style={Styles.title}> Browse </Text>
            <Text style={Styles.header}> New! </Text>
            {scroll1}
            <Text style={Styles.header}> Nearby </Text>
            {scroll2}
        </>
    );
}

export default HomeBrowseScreen;