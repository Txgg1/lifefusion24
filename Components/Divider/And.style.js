/**
          --- And.style.js ---

* Description:
  
  Ce fichier définit les styles utilisés pour le composant `And`.
  Il utilise `StyleSheet` de React Native pour créer des styles réutilisables et modulaires.
  On exporte une constante `s` pour gérer les styles dans les fichiers .jsx.

* Styles utilisés:

  container: Style appliqué au conteneur principal, définissant la disposition en ligne, l'alignement et la justification des éléments.
  divider: Style appliqué aux lignes de séparation de chaque côté du titre, définissant la largeur, la hauteur de la bordure inférieure, la couleur de la bordure et la marge verticale.
  and: Style appliqué au texte du titre "OU", définissant la taille de la police, la couleur, le remplissage horizontal, la graisse et le style de la police.
  qrCode: Style appliqué au texte du sous-titre, définissant la marge supérieure.

**/


import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
  container: {
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
  }, 
  divider: {
    width: '25%',
    height:3,
    borderBottomWidth: 1.5,
    borderBottomColor: '#450045',
    marginVertical: 25, // Ajoutez de l'espace autour du séparateur
  },
  and: {
    fontSize:16,
    color:"#450045",
    paddingHorizontal:"5%",
    fontWeight: "normal",
    fontStyle:"italic",
  },
  qrCode: {
    marginTop:"-2%",
  }
});