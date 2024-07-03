/**
          --- Header2a.style.js ---

* Description:
  
  Ce fichier définit les styles utilisés pour le composant `Header2a`.
  Il utilise `StyleSheet` de React Native pour créer des styles réutilisables et modulaires.
  On exporte une constante `s` pour gérer les styles dans les fichiers .jsx.

* Styles utilisés:

  container: Style appliqué au conteneur principal, définissant la disposition en ligne, l'alignement et l'espacement.
  identification: Style appliqué au conteneur de l'identification, définissant la disposition en colonne.
  photo: Style appliqué au conteneur de la photo, définissant la taille, la bordure, le rayon de bordure, l'alignement et le débordement.
  miniLogo: Style appliqué au conteneur du mini-logo, définissant la taille et l'alignement.

**/


import { StyleSheet } from "react-native";

export const s = StyleSheet.create ({

container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  identification: {
    flexDirection: "column",
  },
  photo: {
    width: 90,
    height: 90,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#450045',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',

  },
  miniLogo: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
 })