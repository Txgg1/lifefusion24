/**
          --- Statistics.style.js ---

* Description:
  
  Ce fichier définit les styles utilisés pour le composant `Statistics`.
  Il utilise `StyleSheet` de React Native pour créer des styles réutilisables et modulaires.
  On exporte une constante `s` pour gérer les styles dans les fichiers .jsx.

* Styles utilisés:

  container: Style appliqué au conteneur principal, définissant la disposition en ligne, l'alignement et les marges.
  item: Style appliqué à chaque élément statistique, définissant la disposition en colonne.

**/


import { StyleSheet } from "react-native";

export const s = StyleSheet.create ({

container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
  },
  item: {
    flexDirection: "column",
  },
})