/** Library imports */
import { Text, View, TextInput, StatusBar } from 'react-native';
/** Project imports */
import Styles from '../components/Styles';

const LocationScreen = ({ navigation }) => {
    return (
        <View
            style={[Styles.container, {flexDirection: "row"}]}>
            <Text style={Styles.header}>Woooo</Text>
            <Text style={Styles.header}>Yay</Text>
        </View>
      );
}

export default LocationScreen;