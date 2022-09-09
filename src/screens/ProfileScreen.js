/** Library imports */
import { Text, View, TextInput, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
/** Project imports */
import Styles from '../components/Styles';

const ProfileScreen = ({route}) => {
    const user = route.params.currUser;
    return (
        <>
            <Text> {user.email} </Text>
        </>
    );
}

export default ProfileScreen;