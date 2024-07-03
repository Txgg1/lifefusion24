/**
          --- SignUp2aShowScreen.style.js ---

* Description:
  
  Ce fichier définit les styles utilisés pour le composant `SignUp2aShowScreen`.
  Il utilise `StyleSheet` de React Native pour créer des styles réutilisables et modulaires.
  On exporte une constant s pour gerer les styles dans les fichiers .jsx

* Styles utilisés:

  container: Style appliqué au conteneur principal, gérant les marges supérieure et inférieure, la largeur et l'espacement flexible.
  
**/

import { StyleSheet } from "react-native";

export const s = StyleSheet.create ({

container: {
    marginTop: "10%",
    marginBottom: "25%",
    width: "100%",
    flex: 1,
    justifyContent: 'space-between',
  },
});