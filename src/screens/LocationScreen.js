/** Library imports */
import { Text, View, TextInput, Button, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
/** Project imports */
import Styles from '../components/Styles';

const LocationScreen = ({ navigation }) => {
    return (
        <>
        <View
            style={[Styles.container, {flexDirection: "row"}]}>
            <Button
                title="Details"
                onPress={() => navigation.navigate('Details')}
                />
            <Icon name="caret-forward" size={40}/>
            <Text style={Styles.title}>Location</Text>
            <Icon name="caret-forward" size={40}/>
            <Button
                title="Confirm"
                />
        </View>
        <ScrollView>
            <Text style={Styles.header}>Title</Text>
            <TextInput
                style={Styles.input}
                placeholder="Title of volunteering opportunity"
                />
            <Text style={Styles.header}>Description</Text>
            <TextInput
                style={Styles.input}
                placeholder="Write a detailed description of the volunteering activity"
                />
            <Text style={Styles.header}>Requirements</Text>
            <TextInput
                style={Styles.input}
                placeholder="What volunteers need to have or be able to do?"
                />
        </ScrollView>
        </>
      );
}

export default LocationScreen;