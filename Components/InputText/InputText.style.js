/**
          --- InputText.style.js ---

* Description:
  
  Ce fichier définit les styles utilisés pour le composant `InputText`.
  Il utilise `StyleSheet` de React Native pour créer des styles réutilisables et modulaires.
  On exporte une constante `s` pour gérer les styles dans les fichiers .jsx.

* Styles utilisés:

  txtInput: Style appliqué au champ de saisie de texte, définissant la largeur, l'alignement du texte, la couleur, la taille de la police, le remplissage, la bordure et le rayon de bordure.

**/


import { StyleSheet } from "react-native";

export const s = StyleSheet.create({

    txtInput: {
        width: '100%',
        textAlign: "center",
        color: '#450045',
        textAlign: 'left',
        paddingStart: 15,
        fontSize: 15,
        padding: 1,
        borderWidth: 3,
        borderColor: '#450045',
        borderRadius: 25,
    },

})