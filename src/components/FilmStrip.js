/** Library imports */
import React, { useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, View, Text, Modal,
    ImageBackground, TouchableOpacity } from 'react-native';
/** Project imports */
import FavourEntry from './FavourEntry';
import Styles, {idleColour, activeColour} from './Styles';

/** Image paths loaded before compiling bundle */
const images = {
  water: require("../../assets/images/water.jpg"),
  bird: require("../../assets/images/Hummingbird.jpg")
}

/** Function to create a filmstrip UI element */
export default function FilmStrip(allElements) {
    // State to store modal visibility
    const [modalVisible, setModalVisible] = useState(false);
    // State to store entry currently displayed on modal
    const [entry, setEntry] = useState(new FavourEntry("","","","",""));
    // Contents of filmstrip
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
                        <Text>{entry.title + "\n"}
                            {entry.description + "\n"}
                            {entry.location + "\n"}
                            {entry.requirements + "\n"}</Text>
                        <Pressable
                          onPress={() => setModalVisible(!modalVisible)}
                        >
                          <Text>Close</Text>
                        </Pressable>
                      </View>
                    </View>
                  </Modal>
            <TouchableOpacity
            onPress={() => {
                setEntry(element);
                setModalVisible(true);
            }}
            style={Styles.wrapperCustom}>
                    <ImageBackground source={
                        (element.imagePath == "assets/images/water.jpg") ?
                        images.water : images.bird}
                        style={Styles.wrappedImage}>
                        <Text style={Styles.caption}>{element.title}</Text>
                    </ImageBackground>
            </TouchableOpacity>
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