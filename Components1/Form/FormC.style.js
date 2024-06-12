import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    width: "95%",
    justifyContent: "center",
  },
  txtTitle: {
    width: 280,
    marginTop: 60,
    marginHorizontal: 95,
    textTransform: "uppercase",
    color: "#450045",
    fontSize: 28,
    fontWeight: "bold",
  },
  txtSubtitle: {
    width: 220,
    marginHorizontal: 125,
    marginBottom: 35,
    fontStyle: "italic",
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
