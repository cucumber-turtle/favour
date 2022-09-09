/** Library imports */
import { Text, View, TextInput, Pressable } from 'react-native';
/** Project imports */
import Styles from '../components/Styles';

export default function FavourEntry (imagePath, title, description) {
    this.imagePath=imagePath;
    this.title=title;
    this.description=description;
}

function EntryOverlay (FavourEntry) {
    this.modalVisible = false;
    this.element = (
        <View >
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.modalVisible}
          >
            <View >
              <View style={Styles.modalView}>
                <Text>Hello World!</Text>
                <Pressable
                  onPress={() => this.modalVisible = !this.modalVisible}
                >
                  <Text >Hide Modal</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>
    );
    this.changeVisibility = () => {
        this.modalVisible = !this.modalVisible;
    }
}

export {EntryOverlay}