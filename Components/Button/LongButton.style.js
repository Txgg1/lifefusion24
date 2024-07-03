/**
          --- LongButton.style.js ---

* Description:
  
  Ce fichier définit les styles utilisés pour le composant `LongButton`.
  Il utilise `StyleSheet` de React Native pour créer des styles réutilisables et modulaires.
  On exporte une constante `s` pour gérer les styles dans les fichiers .jsx.

* Styles utilisés:

  btnWhite: Style appliqué au bouton long, définissant la largeur, les marges horizontales, les remplissages, la hauteur, la couleur de fond, la bordure et le rayon de bordure, ainsi que la justification du contenu.
  txtPurple: Style appliqué au texte du bouton, définissant la couleur, la taille de la police, la graisse, la transformation en majuscules, l'alignement et le remplissage.

**/


import { StyleSheet } from "react-native";

export const s = StyleSheet.create({

    btnWhite: {
        width:"99%",
        marginHorizontal:"auto",
        paddingLeft:"10%",
        paddingRight:"20%",
        height: 25,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#450045',
        borderRadius: 25,
        justifyContent: 'center',
    },
    txtPurple: {
        color: '#450045',
        fontSize: 8,
        fontWeight: "bold",
        textTransform: "uppercase",
        textAlign: 'center',
        padding: 2,
    },
});