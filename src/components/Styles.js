import { StyleSheet, Platform, StatusBar } from "react-native";

const idleColour = "#000000";
const activeColour = "#4287f5";

const Styles = StyleSheet.create({
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
});

export default Styles
export {idleColour, activeColour}