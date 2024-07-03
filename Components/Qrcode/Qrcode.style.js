/**
          --- Qrcode.style.js ---

* Description:
  
  Ce fichier définit les styles utilisés pour le composant `Qrcode`.
  Il utilise `StyleSheet` de React Native pour créer des styles réutilisables et modulaires.
  On exporte une constante `s` pour gérer les styles dans les fichiers .jsx.

* Styles utilisés:

  container: Style appliqué au conteneur principal, définissant la disposition en ligne, les marges et l'espacement entre les boutons.

**/

import { StyleSheet } from "react-native";

export const s = StyleSheet.create ({

   container : { 
    marginTop:"5%",
        flexDirection:"row",
        justifyContent:"space-between"        
    }
})