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
    top: 30,
    left: 20,
    zIndex: 1,
    width:30,
    height:30,
    borderRadius:20,
    backgroundColor:"#450045",
    borderWidth:1,
  },
  btnText: {
    top: -3.5,
    left: 7,
    alignItems:"center",
    justifyContent:"center",
    color:"white",
    fontSize:23,
    fontWeight:"bold",
  }

});