/**
          --- FormSignUp1.style.js ---

* Description:
  
  Ce fichier définit les styles utilisés pour le composant `FormSignUp1`.
  Il utilise `StyleSheet` de React Native pour créer des styles réutilisables et modulaires.
  On exporte une constante `s` pour gérer les styles dans les fichiers .jsx.

* Styles utilisés:

  container: Style appliqué au conteneur principal, définissant la marge supérieure, la marge inférieure, la largeur, la flexibilité et l'alignement des éléments.
  formInput: Style appliqué au conteneur des champs de saisie, définissant la largeur, la marge horizontale et l'alignement des éléments.
  formButtons: Style appliqué au conteneur des boutons, définissant la marge supérieure et l'alignement des éléments.
  txtTitle: Style appliqué au texte du titre, définissant la marge supérieure, la largeur, la transformation en majuscules, la couleur, la taille de la police et la graisse.
  txtSubtitle: Style appliqué au texte du sous-titre, définissant l'alignement, la largeur, la marge inférieure, le style de la police et la taille de la police.
  txtInput: Style appliqué aux champs de saisie, définissant la largeur, le style de la police, la hauteur, la couleur de la bordure, la largeur de la bordure, le rayon de bordure, la marge inférieure et la couleur du texte.

**/

import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    marginTop:"8%",
    marginBottom:"25%",
    width:"100%",
    flex:1,
    justifyContent: 'space-between',
  },
  formInput: {
    width:"80%",
    marginHorizontal:"auto",
    alignItems: 'center',
  },
  formButtons: {
    marginTop:"10%",
    alignItems: 'center',
  },
  txtTitle: {
    marginTop: 20,
    width: 380,
    textTransform: "uppercase",
    color: "#450045",
    fontSize: 22,
    fontWeight: "bold",
  },
  txtSubtitle: {
    textAlign:"center",
    width: 300,
    marginBottom: 15,
    fontStyle: "italic",
    fontSize: 18,
  },
  txtInput: {
    width:"100%",
    fontStyle:"italic",
    height: 30,
    borderColor: '#450045',
    borderWidth: 1,
    borderRadius: 25,
    marginBottom: 15,
    color: '#450045',
  
  }
});
