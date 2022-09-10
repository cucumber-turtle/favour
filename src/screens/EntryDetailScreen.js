/** Library imports */
import { Text, View, TextInput, ScrollView, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
/** Project imports */
import Styles from '../components/Styles';
import FavourEntry from '../components/FavourEntry';

const EntryDetailScreen = ({ navigation, route }) => {
    let new_entry = route.params ? route.params.entry : new FavourEntry("","","","","");

    return (
        <>
        <View
            style={[Styles.container, {flexDirection: "row"}]}>
            <Text style={Styles.title}>Details</Text>
            <Icon name="caret-forward" size={40}/>
            <Button
                title="Location"
                onPress={() => navigation.navigate('Location', {entry: new_entry})}
                />
            <Icon name="caret-forward" size={40}/>
            <Text style={Styles.title}>Confirm</Text>
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
                multiline={true}
                placeholder="Write a detailed description of the volunteering activity"
                />
            <Text style={Styles.header}>Requirements</Text>
            <TextInput
                style={Styles.input}
                multiline={true}
                placeholder="What volunteers need to have or be able to do"
                />
        </ScrollView>
        </>
      );
}

export default EntryDetailScreen;