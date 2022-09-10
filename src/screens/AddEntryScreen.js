/** Library imports */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
/** Project imports */
import Styles from '../components/Styles';
import LocationScreen from './LocationScreen';
import EntryDetailScreen from './EntryDetailScreen';

const Stack = createNativeStackNavigator();

const AddEntryScreen = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false}}>
        <Stack.Screen
          name="Details"
          component={EntryDetailScreen}
        />
        <Stack.Screen
          name="Location"
          component={LocationScreen}
        />
      </Stack.Navigator>
      );
}

export default AddEntryScreen;