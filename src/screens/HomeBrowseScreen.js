/** Library imports */
import { Text, View, TextInput, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
/** Project imports */
import FilmStrip from '../components/FilmStrip';
import FavourEntry from '../components/FavourEntry';
import Styles from '../components/Styles';
import {getEntries} from '../AppInit';

const HomeBrowseScreen = () => {
    let entries = getEntries();
    const allEntries = [];

    function convertToFavour (data) {
        let favour = new FavourEntry("","","","","");
        favour.title = data.Title;
        favour.requirements = data.Requirements;
        favour.image = data.Image;
        favour.description = data.Description;
        favour.location = data.Location;
        return favour;
    }

    Promise.all(entries.get()).then((querySnapshot) => {
          querySnapshot.forEach(snapshot => {
              let data = snapshot.data();
              let favour = convertToFavour(data);
              allEntries.push(favour);
          })
      });

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