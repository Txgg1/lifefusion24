import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    marginTop:"8%",
    marginBottom:"25%",
    width:"100%",
    flex:1,
    justifyContent: 'space-between',
  },
  formInput: {
    width:"80%",
    marginHorizontal:"auto",
    alignItems: 'center',
  },
  formButtons: {
    marginTop:"10%",
    alignItems: 'center',
  },
  txtTitle: {
    marginTop: 20,
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
    fontSize: 18,
  },
  txtInput: {
    width:"100%",
    fontStyle:"italic",
    height: 30,
    borderColor: '#450045',
    borderWidth: 1,
    borderRadius: 25,
    marginBottom: 15,
    color: '#450045',
  
  }
});
