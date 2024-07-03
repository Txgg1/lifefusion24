/**
          --- Photo.style.js ---

* Description:
  
  Ce fichier définit les styles utilisés pour le composant `Photo`.
  Il utilise `StyleSheet` de React Native pour créer des styles réutilisables et modulaires.
  On exporte une constante `s` pour gérer les styles dans les fichiers .jsx.

* Styles utilisés:

  photo: Style appliqué à l'image, définissant la largeur, la hauteur et le mode de redimensionnement.

**/

import { StyleSheet } from "react-native";

export const s = StyleSheet.create ({

   photo : { 
        width:70,
        height: 70,
        resizeMode:"cover",
        
    }
})