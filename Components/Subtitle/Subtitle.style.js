/**
          --- Subtitle.style.js ---

* Description:
  
  Ce fichier définit les styles utilisés pour le composant `Subtitle`.
  Il utilise `StyleSheet` de React Native pour créer des styles réutilisables et modulaires.
  On exporte une constante `s` pour gérer les styles dans les fichiers .jsx.

* Styles utilisés:

  txtSubtitle: Style appliqué au texte du sous-titre, définissant l'alignement du texte, la couleur, le style de la police et la taille de la police.

**/

import { StyleSheet } from "react-native";

export const s = StyleSheet.create ({

txtSubtitle : {
    textAlign:"center",
    color:'#450045',
    fontStyle:'italic',
    fontSize:14,
},

})