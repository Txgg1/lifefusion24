/**
          --- SignUp3Data1Screen.style.js ---

  * Description:

    Ce fichier définit les styles utilisés pour le composant `SignUp3Data1Screen`.
    Il utilise `StyleSheet` de React Native pour créer des styles réutilisables et modulaires { s }.

  * Styles:

    container: Style appliqué au conteneur principal, gérant la disposition flexible et l'espacement vertical.
    contentAd: Style appliqué à la vue contenant les phrases d'accroche, centré et avec une marge supérieure.
    catchTitle: Style appliqué aux titres des phrases d'accroche, définissant la taille de la police, la graisse, l'italique et la couleur.
    catchSubtitle: Style appliqué aux sous-titres des phrases d'accroche, définissant la taille de la police, la graisse, l'italique, la couleur et l'alignement.

**/

import { StyleSheet } from "react-native";

export const s = StyleSheet.create ({

  container: {
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