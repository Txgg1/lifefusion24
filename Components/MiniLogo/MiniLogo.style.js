/**
          --- MiniLogo.style.js ---

* Description:
  
  Ce fichier définit les styles utilisés pour le composant `MiniLogo`.
  Il utilise `StyleSheet` de React Native pour créer des styles réutilisables et modulaires.
  On exporte une constante `s` pour gérer les styles dans les fichiers .jsx.

* Styles utilisés:

  logo: Style appliqué à l'image du logo, définissant la largeur, la hauteur, le mode de redimensionnement et le remplissage horizontal automatique.

**/

import { StyleSheet } from "react-native";

export const s = StyleSheet.create ({

   logo : {   
        width: 70,
        height: 70,
        resizeMode:"contain",
        paddingHorizontal:"auto",
    },
})