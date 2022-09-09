/** Library imports */
import React, { useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, View, Text, Modal } from 'react-native';
/** Project imports */
import FavourEntry from './FavourEntry';
import Styles from './Styles';

export default function FilmStrip(allElements) {
    const [modalVisible, setModalVisible] = useState(false);
    const [entry, setEntry] = useState(new FavourEntry("","",""));
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
                          <Text>Hide Modal</Text>
                        </Pressable>
                      </View>
                    </View>
                  </Modal>
            <Pressable
            onPress={() => {
                console.log("ok");
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
                    <Text>{element.title}</Text>
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