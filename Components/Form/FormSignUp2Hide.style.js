/**
          --- FormSignUp2Hide.style.js ---

* Description:
  
  Ce fichier définit les styles utilisés pour le composant `FormSignUp2Hide`.
  Il utilise `StyleSheet` de React Native pour créer des styles réutilisables et modulaires.
  On exporte une constante `s` pour gérer les styles dans les fichiers .jsx.

* Styles utilisés:

  container: Style appliqué au conteneur principal, définissant la marge supérieure, la largeur, l'alignement et la justification des éléments.

**/


import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    marginTop:10,
    width: "100%",
    alignItems:"center",
    justifyContent: "space-around",
  },
});
