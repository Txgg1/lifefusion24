/**
          --- CatchPhrase.style.js ---

* Description:
  
  Ce fichier définit les styles utilisés pour le composant `CatchPhrase`.
  Il utilise `StyleSheet` de React Native pour créer des styles réutilisables et modulaires.
  On exporte une constante `s` pour gérer les styles dans les fichiers .jsx.

* Styles utilisés:

  container: Style appliqué au conteneur principal, définissant l'alignement des éléments et la marge verticale.
  catchTitle: Style appliqué au texte du titre, définissant la taille de la police, la graisse, la transformation en majuscules et la couleur.
  catchSubtitle: Style appliqué au texte du sous-titre, définissant la taille de la police, la couleur et l'alignement.

**/

import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 10,
  },
  catchTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textTransform:"uppercase",
    color: '#450045',
  },
  catchSubtitle: {
    fontSize: 12,
    color: '#450045',
    textAlign: 'center',
  },
});
