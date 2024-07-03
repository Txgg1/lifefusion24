/**
          --- FormPartnerShip1.style.js ---

* Description:
  
  Ce fichier définit les styles utilisés pour le composant `FormPartnerShip1`.
  Il utilise `StyleSheet` de React Native pour créer des styles réutilisables et modulaires.
  On exporte une constante `s` pour gérer les styles dans les fichiers .jsx.

* Styles utilisés:

  container: Style appliqué au conteneur principal, définissant la marge verticale, l'alignement et la justification des éléments.
  txtTitle: Style appliqué au texte du titre, définissant la marge verticale, la taille de la police et la transformation en majuscules.
  txtSubtitle: Style appliqué au texte du sous-titre, définissant la largeur, la marge verticale, la taille de la police et le style.
  btnContainer: Style appliqué au conteneur des boutons carrés, définissant la marge supérieure, la flexibilité, la largeur, l'alignement et la justification des éléments.
  squareButton: Style appliqué aux boutons carrés (actuellement vide, à personnaliser si nécessaire).

**/


import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container:{
    marginVertical:120,
    alignItems:"center",
    justifyContent:'center',
  },
  txtTitle: {
    marginVertical:20,
    fontSize:30,
    textTransform:"uppercase",
  },
  txtSubtitle: {
    width:"95%",
    marginVertical:30,
    fontSize:20,
    fontStyle:"italic",
  },
  btnContainer: {
    marginTop:150,
    flexDirection:"row",
    width: "75%",
    alignItems:"center",
    justifyContent: "space-between",
  },
  squareButton: {

  }
  
});
