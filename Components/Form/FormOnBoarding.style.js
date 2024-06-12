import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    width: "100%",
    alignItems:"center",
    justifyContent: "center",
  },
  txtTitle: {
    marginTop:35,
    width: 380,
    textTransform: "uppercase",
    color: "#450045",
    fontSize: 22,
    fontWeight: "bold",
  },
  txtSubtitle: {
    textAlign:"center",
    width: 300,
    marginBottom: 15,
    fontStyle: "italic",
    fontSize: 16,
  },
  txtInput: {
    width:340,
    height:40,
    color:'#450045',
    textAlign:'left',
    paddingStart:25,
    marginVertical:15,
    fontSize:15,
    fontStyle:"italic",
    fontWeight:"bold",
    color:"#450045",
    borderWidth: 3,
    borderColor: '#450045',
    borderRadius: 25,
  }
});
