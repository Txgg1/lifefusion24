/**
          --- BigButton.style.js ---

* Description:
  
  Ce fichier définit les styles utilisés pour le composant `BigButton`.
  Il utilise `StyleSheet` de React Native pour créer des styles réutilisables et modulaires.
  On exporte une constante `s` pour gérer les styles dans les fichiers .jsx.

* Styles utilisés:

  container: Style appliqué au conteneur principal (actuellement vide, à personnaliser si nécessaire).
  btnPurple: Style appliqué au bouton de connexion, définissant l'alignement, la justification, la taille, la couleur de fond, le rayon de bordure et la marge verticale.
  txtPurple: Style appliqué au texte du bouton de connexion, définissant la couleur, la taille de la police, la graisse, la transformation en majuscules, l'alignement et le remplissage.
  btnWhite: Style appliqué au bouton d'inscription, définissant l'alignement, la justification, la taille, la couleur de fond transparente, la bordure, le rayon de bordure, la marge verticale et la marge horizontale.
  txtWhite: Style appliqué au texte du bouton d'inscription, définissant la couleur, la taille de la police, la graisse, la transformation en majuscules, l'alignement et le remplissage.
  disabledButton: Style appliqué aux boutons désactivés, définissant une opacité réduite.

**/

import { StyleSheet } from "react-native";

export const s = StyleSheet.create ({

container : {

    },
btnPurple : {
    alignItems:"center",
    justifyContent:"center",
    width:220,
    height:80,
    marginVertical:10,
    backgroundColor:'#450045',
    borderRadius: 10,
},
txtPurple : {
    color: '#450045',
    fontSize:20,
    fontWeight:"bold",
    textTransform:"uppercase",
    textAlign:'center',
    padding:5,    
},
btnWhite : {
    alignItems:"center",
    justifyContent:"center",
    width:220,
    height:80,
    backgroundColor:'transparent',
    marginVertical:10,
    marginHorizontal:130,
    borderWidth: 2,
    borderColor: '#450045',
    borderRadius: 10,
},
txtWhite : {
    color: 'white',
    fontSize:20,
    fontWeight:"bold",
    textTransform:"uppercase",
    textAlign:"center",
    padding: 5,
},
disabledButton: {
    opacity: 0.4,
  }

})