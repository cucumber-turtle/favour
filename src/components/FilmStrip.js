/** Library imports */
import React, { useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, View, Text, Modal, Image } from 'react-native';
/** Project imports */
import FavourEntry from './FavourEntry';
import Styles, {idleColour, activeColour} from './Styles';

export default function FilmStrip(allElements) {
    const [modalVisible, setModalVisible] = useState(false);
    const [entry, setEntry] = useState(new FavourEntry("","","","",""));
    const contents = [];
    for (let i = 0; i < allElements.length; i++) {
        let element = allElements[i];
        let reactElement = (
            <View style={Styles.container} key={i}>
            <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                      Alert.alert("Modal has been closed.");
                      setModalVisible(!modalVisible);
                    }}
                  >
                    <View style={Styles.centeredView}>
                      <View style={Styles.modalView}>
                        <Text>{entry.description}</Text>
                        <Pressable
                          onPress={() => setModalVisible(!modalVisible)}
                        >
                          <Text>Close</Text>
                        </Pressable>
                      </View>
                    </View>
                  </Modal>
            <Pressable
            onPress={() => {
                setEntry(element);
                setModalVisible(true);
            }}
            style={({ pressed }) => [
                      {
                        backgroundColor: pressed
                          ? 'rgb(210, 230, 255)'
                          : 'white'
                      },
                      Styles.wrapperCustom
                    ]}>
                    <Image source={{uri: element.image}}/>
            </Pressable>
            </View>
        );
        contents.push(reactElement);
    }
    return (
    <SafeAreaView style={Styles.AndroidSafeArea}>
      <ScrollView horizontal={true}>
        {contents}
      </ScrollView>
    </SafeAreaView>
    );
}