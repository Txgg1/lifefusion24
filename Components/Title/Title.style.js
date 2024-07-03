/**
          --- Title.style.js ---

* Description:
  
  Ce fichier définit les styles utilisés pour le composant `Title`.
  Il utilise `StyleSheet` de React Native pour créer des styles réutilisables et modulaires.
  On exporte une constante `s` pour gérer les styles dans les fichiers .jsx.

* Styles utilisés:

  txtTitle: Style appliqué au texte du titre, définissant l'alignement du texte, la couleur et la taille de la police.

**/


import { StyleSheet } from "react-native";

export const s = StyleSheet.create ({

txtTitle : {
    textAlign:"center",
    color:'#450045',
    fontSize:22,
},

})