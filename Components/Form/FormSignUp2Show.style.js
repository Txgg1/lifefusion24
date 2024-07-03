/**
          --- FormSignUp2Show.style.js ---

* Description:
  
  Ce fichier définit les styles utilisés pour le composant `FormSignUp2Show`.
  Il utilise `StyleSheet` de React Native pour créer des styles réutilisables et modulaires.
  On exporte une constante `s` pour gérer les styles dans les fichiers .jsx.

* Styles utilisés:

  container: Style appliqué au conteneur principal, définissant la marge supérieure, la largeur et l'alignement des éléments.
  buttons: Style appliqué au conteneur des boutons, définissant l'alignement.
  footer: Style appliqué au pied de page, définissant l'alignement et la marge supérieure.
  title: Style appliqué au texte du titre, définissant la taille de la police, le style et la marge inférieure.
  subtitle: Style appliqué au texte du sous-titre, définissant la taille de la police, le style et la marge inférieure.

**/


import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    marginTop:10,
    width: "100%",
    alignItems:"center",
  },
  buttons: {
     alignItems:"center",
  },
  footer: {
    alignItems:"center",
    marginTop: "12%",
  },
  title: {
    fontSize:16,
    fontStyle:"italic",
    marginBottom:20,
  },
  subtitle: {
    fontSize:11,
    fontStyle:"italic",
    marginBottom:20,
  }
});

