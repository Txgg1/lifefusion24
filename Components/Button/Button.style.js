/**
          --- Button.style.js ---

* Description:
  
  Ce fichier définit les styles utilisés pour le composant `Button`.
  Il utilise `StyleSheet` de React Native pour créer des styles réutilisables et modulaires.
  On exporte une constante `s` pour gérer les styles dans les fichiers .jsx.

* Styles utilisés:

  btnPurple: Style appliqué au bouton de (type) connexion, définissant la largeur, la hauteur, la couleur de fond, le rayon de bordure et la justification du contenu.
  txtPurple: Style appliqué au texte du bouton de (type) connexion, définissant la couleur, la taille de la police, la graisse, la transformation en majuscules, l'alignement et le remplissage.
  btnWhite: Style appliqué au bouton de (type) inscription, définissant la largeur, la hauteur, la couleur de fond transparente, la bordure, le rayon de bordure et la justification du contenu.
  txtWhite: Style appliqué au texte du bouton de (type) inscription, définissant la couleur, la taille de la police, la graisse, la transformation en majuscules, l'alignement et le remplissage.
  btnHeight: Style appliqué aux boutons pour définir une hauteur spécifique (40px).

**/

import { StyleSheet } from "react-native";

export const s = StyleSheet.create ({

btnPurple : {
    width:"65%",
    height:30,
    backgroundColor:'#450045',
    borderRadius: 25,
    justifyContent:'center',
},
txtPurple : {
    color: '#450045',
    fontSize:15,
    fontWeight:"bold",
    textTransform:"uppercase",
    textAlign:'center',
    padding:2,
},
btnWhite : {
    width:"65%",
    height:30,
    backgroundColor:'transparent',
    borderWidth: 1,
    borderColor: '#450045',
    borderRadius: 25,
    justifyContent:'center',
},
txtWhite : {
    color: 'white',
    fontSize:15,
    fontWeight:"bold",
    textTransform:"uppercase",
    textAlign:'center',
    padding:2,
},
btnHeight: {
    height:40,
},

});