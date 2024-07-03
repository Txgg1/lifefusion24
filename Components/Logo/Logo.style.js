/**
          --- Logo.style.js ---

* Description:
  
  Ce fichier définit les styles utilisés pour le composant `Logo`.
  Il utilise `StyleSheet` de React Native pour créer des styles réutilisables et modulaires.
  On exporte une constante `s` pour gérer les styles dans les fichiers .jsx.

* Styles utilisés:

  image: Style appliqué à l'image du logo, définissant la largeur, la hauteur et le mode de redimensionnement.

**/

import { StyleSheet } from "react-native";

export const s = StyleSheet.create ({

    image : {        
        width: 120,
        height: 120,
        resizeMode:"contain",
    }
})