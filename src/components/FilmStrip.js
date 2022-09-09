/** Library imports */
import React, { useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, View, Text } from 'react-native';

import Styles from '../components/Styles';

export default function FilmStrip(allElements) {
    const contents = [];
    for (let i = 0; i < allElements.length; i++) {
        let element = allElements[i];
        let reactElement = (
            <View style={Styles.container} key={i}>
            <Pressable
            onPress={() => {
            console.log("ok");
            }}
            style={({ pressed }) => [
                      {
                        backgroundColor: pressed
                          ? 'rgb(210, 230, 255)'
                          : 'white'
                      },
                      Styles.wrapperCustom
                    ]}>
                    {({ pressed }) => (
                      <Text>
                        {pressed ? 'Pressed!' : 'Press Me'}
                      </Text>
                    )}
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