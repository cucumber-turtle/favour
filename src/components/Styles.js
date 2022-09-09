import { StyleSheet, Platform, StatusBar } from "react-native";

const idleColour = "#000000";
const activeColour = "#4287f5";

const Styles = StyleSheet.create({
  title: {
    padding: 10,
    fontSize: 30,
  },
  header: {
    padding: 5,
    fontSize: 20,
  },
  body: {
    fontSize: 12,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
      borderColor: "gray",
      width: "70%",
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
    },
  tinyLogo: {
      width: 280,
      height: 80,
    },
  wrapperCustom: {
      borderRadius: 8,
      padding: 5
    },
  AndroidSafeArea: {
      flex: 1,
      backgroundColor: "red",
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
});

export default Styles
export {idleColour, activeColour}