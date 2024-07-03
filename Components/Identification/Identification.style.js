/**
          --- Identification.style.js ---

* Description:
  
  Ce fichier définit les styles utilisés pour le composant `Identification`.
  Il utilise `StyleSheet` de React Native pour créer des styles réutilisables et modulaires.
  On exporte une constante `s` pour gérer les styles dans les fichiers .jsx.

* Styles utilisés:

  container: Style appliqué au conteneur principal, définissant l'alignement des éléments et le remplissage horizontal.
  title: Style appliqué au texte du titre, définissant la taille de la police, le style et la couleur.
  subtitle: Style appliqué au texte du sous-titre, définissant la taille de la police, la graisse et la couleur.

**/


import { StyleSheet } from "react-native";

export const s = StyleSheet.create ({

container: {
    alignItems: 'center',
    paddingHorizontal:"3%"
  },
  title: {
    fontSize: 10,
    fontStyle: "italic",
    color: "#450045",
  },
  subtitle: {
    fontSize: 18,
   
    fontWeight: "bold",
    color: "#450045",
  },

});

