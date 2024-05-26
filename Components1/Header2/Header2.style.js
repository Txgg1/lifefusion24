import { StyleSheet } from "react-native";

export const s = StyleSheet.create ({

container    : {
    flexDirection: 'row',
    alignItems: 'center',    
    justifyContent: 'space-around',
    padding:10,
},

identification: {
    flexDirection:"column",
},
photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#450045',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
},
miniLogo: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtTitle: {
    fontSize: 18,
    fontWeight:"bold",
    textTransform: "uppercase",
  }

})