/** Library imports */
import { Text, View, TextInput, Pressable } from 'react-native';
/** Project imports */
import Styles from '../components/Styles';

export default function FavourEntry (imagePath, title, description, location) {
    this.imagePath=imagePath;
    this.title=title;
    this.description=description;
    this.location=location;
}