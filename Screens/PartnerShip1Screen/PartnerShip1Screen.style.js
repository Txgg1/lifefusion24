/**
          --- PartnerShip1Screen.style.js ---

* Description:
  
  Ce fichier définit les styles utilisés pour le composant `PartnerShip1Screen`.
  Il utilise `StyleSheet` de React Native pour créer des styles réutilisables et modulaires.
  On exporte une constante `s` pour gérer les styles dans les fichiers .jsx.

* Styles utilisés:

  container: Style appliqué au conteneur principal pour occuper tout l'espace disponible.
  catchTitle: Style appliqué au titre d'accroche, définissant la taille de la police, la graisse, la transformation en majuscules et la couleur.
  catchSubtitle: Style appliqué au sous-titre d'accroche, définissant la taille de la police, la graisse, l'italique, l'interligne, la couleur et l'alignement.
  btnText: Style appliqué au texte du bouton, définissant la taille de la police, la graisse et la couleur.

**/

import { StyleSheet } from "react-native";

export const s = StyleSheet.create ({

    container : {
        flex:1,
    },

    catchTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform:"uppercase",
    color: '#450045',
    
},
catchSubtitle: {
    fontSize: 11,
    fontWeight:"bold",
    fontStyle:"italic",
    lineHeight:20,
    color: '#450045',
    textAlign: 'center',
    marginTop:"-10%",
    marginBottom:"5%",
  },
  btnText: {
    fontSize:10,
    fontWeight:"bold",
    color:"#450045",
  }
})