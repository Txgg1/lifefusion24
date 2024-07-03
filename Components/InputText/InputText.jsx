/**
          --- InputText.jsx ---

  * Description:

    Ce fichier définit le composant `InputText`, qui affiche un champ de saisie de texte avec des styles personnalisables.

  * Props:

    - placeholder: Texte affiché lorsque le champ de saisie est vide.
    - value: Valeur actuelle du champ de saisie.
    - onChangeText: Fonction appelée lorsque le texte change.
    - secureTextEntry: Booléen indiquant si le texte doit être masqué (pour les mots de passe).
    - style: Style supplémentaire appliqué au champ de saisie.

  * Variables:
    Aucune

  * Composants:

    TextInput: Composant affichant le champ de saisie de texte.

  * Fonctions:
    
    InputText: Fonction principale qui rend (génère) l'interface utilisateur du composant `InputText`.

**/


import React from "react";
import { TextInput } from "react-native";
import { s } from "./InputText.style";

  function InputText({ placeholder, value, onChangeText, secureTextEntry, style }) {
  return (
    <TextInput
      style={[s.txtInput, style]}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
    />
  );
}

export  default React.memo(InputText);
