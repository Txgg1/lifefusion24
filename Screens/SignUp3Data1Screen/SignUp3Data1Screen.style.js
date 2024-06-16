import { StyleSheet } from "react-native";

export const s = StyleSheet.create ({

    container: {
    // marginTop:10,
    marginVertical:10,
    width:"100%",
    flex:1,
    justifyContent: 'space-between',
  },
  contentAd: {
    alignItems: 'center',
    marginTop:10,  
  },
  catchTitle: {
    fontSize: 12,
    fontWeight: "bold",
    textTransform:"none",
    fontStyle:"italic",
    textTransform:"uppercase",    
    color: '#450045',
},
catchSubtitle: {
    fontSize: 14,
    fontWeight: "normal",
    fontStyle:"italic",
    color: '#450045',
    textAlign: 'center',
    marginBottom:"0",
  },
})