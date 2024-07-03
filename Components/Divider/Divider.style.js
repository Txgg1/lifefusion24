/**
          --- Divider.style.js ---

* Description:
  
  Ce fichier définit les styles utilisés pour le composant `Divider`.
  Il utilise `StyleSheet` de React Native pour créer des styles réutilisables et modulaires.
  On exporte une constante `s` pour gérer les styles dans les fichiers .jsx.

* Styles utilisés:

  divider: Style appliqué au séparateur, définissant la largeur, la hauteur de la bordure inférieure, la couleur de la bordure et la marge verticale.

**/

import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
  divider: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#450045',
    marginVertical: 25,
  },
});
