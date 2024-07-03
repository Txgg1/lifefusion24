/**
          --- FirstScreen.style.js ---

* Description:
  
  Ce fichier définit les styles utilisés pour le composant `FirstScreen`.
  Il utilise `StyleSheet` de React Native pour créer des styles réutilisables et modulaires.
  On exporte une constante `s` pour gérer les styles dans les fichiers .jsx.

* Styles utilisés:

  container: Style appliqué au conteneur principal, gérant les marges supérieure et inférieure, la largeur et l'espacement flexible.
  contentHeader: Style appliqué à la vue contenant l'en-tête.
  contentAd: Style appliqué à la vue contenant les phrases d'accroche, centré et avec une marge supérieure.
  contentBtn: Style appliqué à la vue contenant le bouton de connexion, centré.
  contentFooter: Style appliqué à la vue contenant le bouton d'inscription, centré.

**/


import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
  container: {
    marginTop:"10%",
    marginBottom:"25%",
    width:"100%",
    flex:1,
    justifyContent: 'space-between',
  },
  contentHeader: {
  },
  contentAd: {
    alignItems: 'center',
    marginTop:"5%",
  },
  contentBtn: {
    alignItems: 'center',
  },
  contentFooter: {
    alignItems: 'center',
  },
});
