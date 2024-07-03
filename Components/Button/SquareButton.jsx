/**
          --- SquareButton.jsx ---

  * Description:

    Ce fichier définit le composant `SquareButton`, qui affiche un bouton carré avec un titre, 
    utilisé pour différentes actions telles que l'inscription ou la connexion.

  * Props:

    - type: Type du bouton, déterminant le style (inscription ou connexion).
    - title: Texte du bouton à afficher.
    - onPress: Fonction appelée lorsque le bouton est pressé.
    - disabled: Indique si le bouton est désactivé.
    - style: Style supplémentaire appliqué au bouton.

  * Variables:
    On vas utiliser ici une constante ternaire.
    Elle utilise l'opérateur ternaire ? pour attribuer une valeur basée sur une condition (type):

    buttonstyle: Style du bouton basé sur le type (inscription ou connexion).
    textstyle: Style du texte basé sur le type (inscription ou connexion).

  * Composants:

    View: Conteneur principal pour structurer les éléments internes du bouton.
    TouchableOpacity: Composant cliquable pour gérer les interactions utilisateur.
    Text: Composant affichant le texte du bouton.

  * Fonctions:

    SquareButton: Fonction principale qui rend (génère) l'interface utilisateur du composant `SquareButton`.

**/

import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { s } from "./SquareButton.style";

    function SquareButton({ type, title, onPress, disabled }) {
    const buttonstyle = type === 'inscription' ? s.btnWhite : s.btnPurple;
    const textstyle = type === 'inscription' ? s.txtPurple : s.txtWhite;
  return (
    <View style = { s.container }>
    <TouchableOpacity  disabled={disabled} onPress={onPress} style={buttonstyle}>
      <Text style={textstyle}>{title}</Text>
    </TouchableOpacity>
    </View>
  );
}

export default React.memo(SquareButton);
