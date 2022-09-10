/** Library imports */
import { Text, View, TextInput, StatusBar, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
/** Project imports */
import Styles from '../components/Styles';
import {signOut} from '../AppInit';

const ProfileScreen = () => {
    const user = auth().currentUser;
    return (
        <>
            <Text> {user.email} </Text>
            <Button title="Sign out" onPress={() => signOut()} />
        </>
    );
}

export default ProfileScreen;