import { StyleSheet } from "react-native";
import { wrap } from '../../node_modules/react-native/node_modules/regenerator-runtime/runtime';

export const s = StyleSheet.create ({

    container : {
       
        
    },

btnPurple : {
    alignItems:"center",
    justifyContent:"center",
    width:220,
    height:80,
    marginVertical:10,
    backgroundColor:'#450045',
    borderRadius: 10,
},
txtPurple : {
    color: '#450045',
    fontSize:20,
    fontWeight:"bold",
    textTransform:"uppercase",
    textAlign:'center',
    padding:5,    
},
btnWhite : {
    alignItems:"center",
    justifyContent:"center",
    width:220,
    height:80,
    backgroundColor:'transparent',
    marginVertical:10,
    marginHorizontal:130,
    borderWidth: 2,
    borderColor: '#450045',
    borderRadius: 10,
},
txtWhite : {
    color: 'white',
    fontSize:20,
    fontWeight:"bold",
    textTransform:"uppercase",
    textAlign:"center",
    padding: 5,
},
disabledButton: {
    opacity: 0.4,
  }

})