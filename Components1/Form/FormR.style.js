import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    width: "95%",
    justifyContent: "center",
  },
  wrap: {
    marginTop:25,
  },
  txtTitle: {
    width: 180,
    marginTop: 80,
    marginHorizontal: 150,
    textTransform: "uppercase",
    color: "#450045",
    fontSize: 28,
    fontWeight: "bold",
  },
  txtSubtitle: {
    width: 250,
    marginHorizontal:115,
    color: "#450045",
    marginBottom: 5,
    fontSize: 18,
  },
  txtInput: {
    width:300,
    color:'#450045',
    textAlign:'left',
    paddingStart:25,
    marginVertical:20,
    marginHorizontal:90,
    fontSize:15,
    borderWidth: 3,
    borderColor: '#450045',
    borderRadius: 20,
    padding: 5
  }
});
