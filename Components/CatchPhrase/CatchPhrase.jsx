/**
          --- CatchPhrase.jsx ---

  * Description:

    Ce fichier définit le composant `CatchPhrase`, qui affiche une phrase d'accroche avec un titre et un sous-titre,
    utilisés pour attirer l'attention de l'utilisateur et transmettre un message important.

  * Props:

    - txtTitle: Texte du titre à afficher.
    - txtSubtitle: Texte du sous-titre à afficher.
    - style: Style supplémentaire appliqué aux textes du titre et du sous-titre.

  * Variables:
    Aucune

  * Composants:

    View: Conteneur principal pour structurer les éléments internes de la phrase d'accroche.
    Text: Composant affichant le texte du titre et du sous-titre.

  * Fonctions:
    
    CatchPhrase: Fonction principale qui rend (génère) l'interface utilisateur du composant `CatchPhrase`.

**/


import React from 'react';
import { View, Text } from 'react-native';
import { s } from './CatchPhrase.style';

const CatchPhrase = ({ txtTitle, txtSubtitle, style }) => {
  return (
    <View style={s.container}>
      <Text style={[s.catchTitle, style]}>{txtTitle}</Text>
      <Text style={[s.catchSubtitle, style]}>{txtSubtitle}</Text>
    </View>
  );
};

export default React.memo(CatchPhrase);
