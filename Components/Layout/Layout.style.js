/**
          --- Layout.style.js ---

* Description:
  
  Ce fichier définit les styles utilisés pour le composant `Layout`.
  Il utilise `StyleSheet` de React Native pour créer des styles réutilisables et modulaires.
  On exporte une constante `s` pour gérer les styles dans les fichiers .jsx.

* Styles utilisés:

  background: Style appliqué à l'image de fond, définissant qu'elle occupe tout l'espace disponible.
  safeArea: Style appliqué à la zone sécurisée, définissant qu'elle occupe tout l'espace disponible.
  container: Style appliqué au conteneur principal, centrant le contenu et appliquant un remplissage horizontal.
  backButton: Style appliqué au bouton de retour, définissant sa position, sa taille, sa couleur et sa bordure.
  btnText: Style appliqué au texte du bouton de retour, définissant sa position, son alignement, sa couleur, sa taille et sa graisse.

**/

import { StyleSheet } from "react-native";

export const s = StyleSheet.create ({

  background: {
    flex: 1,
   
  },
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  backButton: {
    position: 'absolute',
    top: 30,
    left: 20,
    zIndex: 1,
    width:30,
    height:30,
    borderRadius:20,
    backgroundColor:"#450045",
    borderWidth:1,
  },
  btnText: {
    top: -3.5,
    left: 7,
    alignItems:"center",
    justifyContent:"center",
    color:"white",
    fontSize:23,
    fontWeight:"bold",
  }

});