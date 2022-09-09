/** Library imports */
import { Text, View, TextInput, StatusBar, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
/** Project imports */
import Styles from '../components/Styles';
import {signOut} from '../AppInit';

const ProfileScreen = ({route}) => {
    const user = route.params.currUser;
    return (
        <>
            <Text> {user.email} </Text>
            <Button title="Sign out" onPress={() => signOut()} />
        </>
    );
}

export default ProfileScreen;