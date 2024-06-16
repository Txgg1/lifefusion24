import { StyleSheet } from "react-native";

export const s = StyleSheet.create ({

  background: {
    flex: 1,
    // opacity:1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
  btnText: {
    fontSize:25,
    marginLeft:"5%",
  }

});