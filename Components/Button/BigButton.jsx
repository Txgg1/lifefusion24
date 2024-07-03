/**
          --- BigButton.jsx ---

  * Description:

    Ce fichier définit le composant `BigButton`, qui affiche un bouton de grande taille avec un titre,
    utilisé pour différentes actions telles que l'inscription ou la connexion, avec des styles basés sur
    le type de bouton et une option de désactivation.

  * Props:
    
    type: Type du bouton, déterminant le style (inscription ou connexion).
    title: Texte du bouton à afficher.
    onPress: Fonction appelée lorsque le bouton est pressé.
    disabled: Indique si le bouton est désactivé.
    style: Style supplémentaire appliqué au bouton.

  * 
    Variables:
    
    buttonstyle: Styles du bouton basés sur le type (inscription ou connexion) et l'état de désactivation.
    textstyle: Style du texte basé sur le type (inscription ou connexion).

  * Composants:

    View: Conteneur principal pour structurer les éléments internes du bouton.
    TouchableOpacity: Composant cliquable pour gérer les interactions utilisateur.
    Text: Composant affichant le texte du bouton.

  * Fonctions:

    BigButton: Fonction principale qui rend (génère) l'interface utilisateur du composant `BigButton`.

**/

import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { s } from "./BigButton.style";

function BigButton({ type, title, onPress, disabled, style}) {
    const buttonstyle = [
      type === 'inscription' ? s.btnWhite : s.btnPurple,
      disabled && s.disabledButton, // Applique le style de désactivation si le bouton est désactivé
  ];
    const textstyle = type === 'inscription' ? s.txtPurple : s.txtWhite;
  return (
    <View style = { [s.container, style] }>
    <TouchableOpacity  disabled={disabled} onPress={onPress} style={buttonstyle}>
      <Text style={textstyle}>{title}</Text>
    </TouchableOpacity>
    </View>
  );
}

export default React.memo(BigButton);
