/**
          --- SquareButton.style.js ---

* Description:
  
  Ce fichier définit les styles utilisés pour le composant `SquareButton`.
  Il utilise `StyleSheet` de React Native pour créer des styles réutilisables et modulaires.
  On exporte une constante `s` pour gérer les styles dans les fichiers .jsx.

* Styles utilisés:

  container: Style appliqué au conteneur principal (actuellement vide, à personnaliser si nécessaire).
  btnPurple: Style appliqué au bouton de (type) connexion, définissant l'alignement, la justification, la taille, la couleur de fond et le rayon de bordure.
  txtPurple: Style appliqué au texte du bouton de (type) connexion, définissant la couleur, la taille de la police, la graisse, le style, l'alignement et le remplissage.
  btnWhite: Style appliqué au bouton de (type) inscription, définissant l'alignement, la justification, la taille, la couleur de fond, la bordure et le rayon de bordure.
  txtWhite: Style appliqué au texte du bouton de (type) inscription, définissant la couleur, la taille de la police, la graisse, la transformation en majuscules, l'alignement et le remplissage.

**/

import { StyleSheet } from "react-native";

export const s = StyleSheet.create ({

container : {      
    
},

btnPurple : {
    alignItems:"center",
    justifyContent:"center",
    width:100,
    height:100,
    backgroundColor:'#450045',
    borderRadius: 5,
},
txtPurple : {
    color: '#450045',
    fontSize:12,
    fontWeight:"normal",
    fontStyle:"italic",
    textAlign:'center',
    padding:10,    
},
btnWhite : {
    alignItems:"center",
    justifyContent:"center",
    width:125,
    height:125,
    backgroundColor:'white',
    borderWidth: 2,
    borderColor: '#450045',
    borderRadius: 5,
},
txtWhite : {
    color: 'white',
    fontSize:12,
    fontWeight:"bold",
    textTransform:"uppercase",
    textAlign:"center",
    padding: 10,
},

})