/**
          --- LongButton.jsx ---

  * Description:

    Ce fichier définit le composant `LongButton`, qui affiche un bouton long avec un titre, 
    utilisé pour différentes actions telles que l'inscription ou la connexion.

  * Props:

    - title: Texte du bouton à afficher.
    - onPress: Fonction appelée lorsque le bouton est pressé.
    - style: Style supplémentaire appliqué au bouton.

  * Variables:
    Aucune

  * Composants:

    TouchableOpacity: Composant cliquable pour gérer les interactions utilisateur.
    Text: Composant affichant le texte du bouton.

  * Fonctions:
    
    LongButton: Fonction principale qui rend (génère) l'interface utilisateur du composant `LongButton`.

**/


import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { s } from "./LongButton.style";

  function LongButton({ title, onPress, style}) {
    
  return (
    <TouchableOpacity onPress={onPress} style={s.btnWhite}>
      <Text style={s.txtPurple}>{title}</Text>
    </TouchableOpacity>
  );
}

export default React.memo(LongButton);
