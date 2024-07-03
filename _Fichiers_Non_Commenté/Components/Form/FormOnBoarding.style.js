import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    marginTop:"10%",
    marginBottom:"70%",
    width:"100%",
    flex:1,
    justifyContent: 'space-between',
  },
  formAd: {
    alignItems: 'center',
    marginTop:"-15%",
    marginBottom:"10%",
  },
  formInput: {
    width:"80%",
    marginHorizontal:"auto",
    alignItems: 'center',
  },
  formCheckbox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'flex-start',
  },
  formBtn: {    
    alignItems: 'center',
  },
  formFooter: {    
    alignItems: 'center',
    marginTop:"-10%",
  },
  checkboxLabel: {
    fontSize: 12,
    fontStyle: "italic",
    color: '#450045',
    paddingStart:65,
    paddingBottom:20,
  },
  txtTitle: {
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: 'bold',
    color: '#450045',
  },
  txtSubtitle: {
    fontSize: 12,
    color: '#450045',
    textAlign: 'center',
  },

  email: {
    width:"100%",
    fontStyle:"italic",
    height: 30,
    borderColor: '#450045',
    borderWidth: 1,
    borderRadius: 25,
    marginBottom: 15,
    color: '#450045',
  },
  Pass: {
    width:"100%",
    fontStyle:"italic",
    height: 30,
    borderColor: '#450045',
    borderWidth: 1,
    borderRadius: 25,
    marginBottom: 15,
    color: '#450045',
  },
});