/** Library imports */
import { Text, View, TextInput, ScrollView, Button } from 'react-native';
/** Project imports */
import Styles from '../components/Styles';

const EntryDetailScreen = ({ navigation }) => {
    return (
        <>
        <View
            style={[Styles.container, {flexDirection: "row"}]}>
            <Text style={Styles.title}>Details</Text>
            <Button
                title="Location"
                onPress={() => navigation.navigate('Location')}
                />
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

export default EntryDetailScreen;