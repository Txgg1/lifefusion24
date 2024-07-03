/**
          --- FormShare1.style.js ---

* Description:
  
  Ce fichier définit les styles utilisés pour le composant `FormShare1`.
  Il utilise `StyleSheet` de React Native pour créer des styles réutilisables et modulaires.
  On exporte une constante `s` pour gérer les styles dans les fichiers .jsx.

* Styles utilisés:

  container: Style appliqué au conteneur principal, définissant la largeur et l'alignement des éléments.
  buttons: Style appliqué au conteneur des boutons, définissant l'alignement et la marge verticale.
  catchSubtitle: Style appliqué au texte de la phrase d'accroche, définissant la taille de la police et le style.

**/

import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    width: "100%",
    alignItems:"center",
  },
  buttons: {
     alignItems:"center",
     marginVertical:"10%",
  },
  catchSubtitle: {

    fontSize:20,
    fontStyle:"italic",

  }
});

