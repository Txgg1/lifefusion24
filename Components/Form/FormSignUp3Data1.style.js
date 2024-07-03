/**
          --- FormSignUp3Data1.style.js ---

* Description:
  
  Ce fichier définit les styles utilisés pour le composant `FormSignUp3Data1`.
  Il utilise `StyleSheet` de React Native pour créer des styles réutilisables et modulaires.
  On exporte une constante `s` pour gérer les styles dans les fichiers .jsx.

* Styles utilisés:

  container: Style appliqué au conteneur principal, définissant le remplissage et l'alignement du contenu.
  txtTitle: Style appliqué au texte du titre, définissant la taille de la police, la graisse et la transformation en majuscules.
  scrollContainer: Style appliqué au conteneur défilant, définissant la flexibilité et la marge inférieure.
  input: Style appliqué à chaque champ de saisie, définissant la marge verticale.
  row: Style appliqué aux conteneurs en ligne, définissant la disposition en ligne et l'espacement entre les éléments.
  halfInput, ville, cp, smallInput: Styles appliqués aux champs de saisie spécifiques, définissant la flexibilité et la marge.
  buttonContainer: Style appliqué au conteneur du bouton, définissant l'alignement et la justification du contenu.
  btnPurple, txtPurple, btnWhite, txtWhite, btnHeight, special, wrap, txtInput: Styles appliqués aux boutons et aux champs de saisie, définissant les couleurs, les tailles, les bordures, les alignements et autres propriétés spécifiques.

**/

import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  txtTitle: {
    fontSize:20,
    fontWeight:"bold",
    textTransform: "uppercase",
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 20, 
  },
  input: {
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  halfInput: {
    flex: 0.48,
  },
  ville: {
    flex: 0.65,
  },
  cp: {
    flex: 0.35,
    marginRight:20,
  },
  smallInput: {
    flex: 0.45,
  },
  buttonContainer: {
    flex:.5,
    alignItems:"center",
    justifyContent: "center",
  },
  btnPurple: {
    width:"65%",
    marginTop:"-25%",
    height:30,
    backgroundColor:'#450045',
    borderRadius: 25,
    justifyContent:'center',
  },
  txtPurple: {
    color: '#450045',
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: 'center',
    padding: 2,
  },
  btnWhite: {
    width: 280,
    backgroundColor: 'white',
    marginTop: 15,
    borderWidth: 2,
    borderColor: '#450045',
    borderRadius: 25,
  },
  txtWhite: {
    color: 'white',
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: 'center',
    padding: 2,
  },
  btnHeight: {
    height: 50,
  },
  special: {
    marginTop: 10,
  },
  wrap: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  txtInput: {
    width: '100%',
    textAlign: "center",
    color: '#450045',
    textAlign: 'left',
    paddingStart: 15,
    fontSize: 13,
    fontStyle:"italic",
    borderWidth: 1,
    borderColor: '#450045',
    borderRadius: 20,
  }
});
