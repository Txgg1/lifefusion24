/**
          --- App.style.js ---

* Description:
  
  Ce fichier définit les styles globaux utilisés dans l'application.
  Il utilise `StyleSheet` de React Native pour créer des styles réutilisables et modulaires.
  On exporte une constant s pour gerer les styles dans les fichiers .jsx

* Styles utilisés:

  container: Style appliqué au conteneur principal pour occuper toute la hauteur et toute la largeur de l'écran.

**/

import { StyleSheet } from "react-native";

export const s = StyleSheet.create ({

    container : {        
      flex:1,        
    },   
   
})