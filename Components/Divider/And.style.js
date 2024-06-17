import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
  container: {
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
  }, 
  divider: {
    width: '25%',
    height:3,
    borderBottomWidth: 1.5,
    borderBottomColor: '#450045',
    marginVertical: 25, // Ajoutez de l'espace autour du séparateur
  },
  and: {
    fontSize:16,
    color:"#450045",
    paddingHorizontal:"5%",
    fontWeight: "normal",
    fontStyle:"italic",
  },
  qrCode: {
    marginTop:"-2%",
  }
});