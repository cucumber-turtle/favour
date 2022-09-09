/** Library imports */
import { Text, View, TextInput, Modal, Pressable, Alert } from 'react-native';
import React, { useState } from "react";
/** Project imports */
import Styles from '../components/Styles';

export default function FavourEntry (imagePath, title, description) {
    this.imagePath=imagePath;
    this.title=title;
    this.description=description;
}

function entryOverlay (FavourEntry) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View >
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View >
              <View style={Styles.modalView}>
                <Text>Hello World!</Text>
                <Pressable
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text >Hide Modal</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <Pressable
            onPress={() => setModalVisible(true)}
          >
            <Text>Show Modal</Text>
          </Pressable>
        </View>
    );
}

export {entryOverlay}