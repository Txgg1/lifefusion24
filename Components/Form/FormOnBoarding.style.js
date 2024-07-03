/**
          --- FormOnBoarding.style.js ---

* Description:
  
  Ce fichier définit les styles utilisés pour le composant `FormOnBoarding`.
  Il utilise `StyleSheet` de React Native pour créer des styles réutilisables et modulaires.
  On exporte une constante `s` pour gérer les styles dans les fichiers .jsx.

* Styles utilisés:

  container: Style appliqué au conteneur principal, définissant la marge supérieure, la marge inférieure, la largeur, la flexibilité et l'alignement des éléments.
  formAd: Style appliqué au conteneur de la phrase d'accroche, définissant l'alignement, la marge supérieure et la marge inférieure.
  formInput: Style appliqué au conteneur des champs de saisie, définissant la largeur, la marge horizontale et l'alignement des éléments.
  formCheckbox: Style appliqué au conteneur de la case à cocher, définissant la disposition en ligne, l'alignement et la justification des éléments. (TODO: A implementer dés que le problème sera résolu)
  formBtn: Style appliqué au conteneur du bouton de connexion, définissant l'alignement.
  formFooter: Style appliqué au conteneur du pied de page, définissant l'alignement et la marge supérieure.
  checkboxLabel: Style appliqué au label de la case à cocher, définissant la taille de la police, le style, la couleur et le remplissage. (TODO: A implementer dés que le problème sera résolu)
  txtTitle: Style appliqué au texte du titre, définissant la taille de la police, la transformation en majuscules, la graisse et la couleur.
  txtSubtitle: Style appliqué au texte du sous-titre, définissant la taille de la police, la couleur et l'alignement.
  email, Pass: Styles appliqués aux champs de saisie pour l'email et le mot de passe, définissant la largeur, le style de la police, la hauteur, la couleur de la bordure, la largeur de la bordure, le rayon de bordure, la marge inférieure et la couleur du texte.

**/

import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    marginTop:"10%",
    marginBottom:"70%",
    width:"100%",
    flex:1,
    justifyContent: 'space-between',
  },
  formAd: {
    alignItems: 'center',
    marginTop:"-15%",
    marginBottom:"10%",
  },
  formInput: {
    width:"80%",
    marginHorizontal:"auto",
    alignItems: 'center',
  },
  formCheckbox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'flex-start',
  },
  formBtn: {    
    alignItems: 'center',
  },
  formFooter: {    
    alignItems: 'center',
    marginTop:"-10%",
  },
  checkboxLabel: {
    fontSize: 12,
    fontStyle: "italic",
    color: '#450045',
    paddingStart:65,
    paddingBottom:20,
  },
  txtTitle: {
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: 'bold',
    color: '#450045',
  },
  txtSubtitle: {
    fontSize: 12,
    color: '#450045',
    textAlign: 'center',
  },

  email: {
    width:"100%",
    fontStyle:"italic",
    height: 30,
    borderColor: '#450045',
    borderWidth: 1,
    borderRadius: 25,
    marginBottom: 15,
    color: '#450045',
  },
  Pass: {
    width:"100%",
    fontStyle:"italic",
    height: 30,
    borderColor: '#450045',
    borderWidth: 1,
    borderRadius: 25,
    marginBottom: 15,
    color: '#450045',
  },
});