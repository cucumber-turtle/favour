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
    margin: 5,
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
      borderRadius: 1,
      padding: 10,
      margin: 10,
    },
  bigLogo: {
      width: 280,
      height: 85,
      margin: 20,
    },
  wrapperCustom: {
      alignItems: "center",
      borderRadius: 8,
      width: 200,
      height: 180,
      borderRadius: 1,
      borderWidth: 1,
      borderColor: "black",
      margin: 10,
    },
  AndroidSafeArea: {
      flex: 1,
      backgroundColor: "white",
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
  submitButton: {
      margin: 10,
    }
});

export default Styles
export {idleColour, activeColour}