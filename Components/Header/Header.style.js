/**
          --- Header.style.js ---

* Description:
  
  Ce fichier définit les styles utilisés pour le composant `Header`.
  Il utilise `StyleSheet` de React Native pour créer des styles réutilisables et modulaires.
  On exporte une constante `s` pour gérer les styles dans les fichiers .jsx.

* Styles utilisés:

  container: Style appliqué au conteneur principal, définissant la largeur, l'alignement et la justification du contenu.
  txtTitle: Style appliqué au texte du titre, définissant la largeur, la taille de la police et la graisse.
  txtSubtitle: Style appliqué au texte du sous-titre, définissant la largeur et la taille de la police.

**/

import { StyleSheet } from "react-native";

export const s = StyleSheet.create ({

container    : {
    width:"95%",
    alignItems:'center',
    justifyContent: 'center',    
},
txtTitle: {
    width:"95%",
    fontSize:20,
    fontWeight:"bold",
},
txtSubtitle: {
    width:"95%",
    fontSize:14,
},

})