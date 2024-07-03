/**
          --- And.jsx ---

  * Description:

    Ce fichier définit le composant `And`, qui affiche une ligne de séparation avec un titre "et" au milieu,
    suivi d'un sous-titre en dessous. Ce composant est utilisé pour séparer visuellement deux sections
    tout en indiquant une relation entre elles.

  * Props:

    - txtTitle: Texte du titre à afficher au centre de la ligne de séparation.
    - txtSubtitle: Texte du sous-titre à afficher en dessous de la ligne de séparation.

  * Variables:
    Aucune

  * Composants:

    View: Conteneur principal pour structurer les éléments internes du séparateur.
    Title: Composant affichant le texte du titre.
    Subtitle: Composant affichant le texte du sous-titre.

  * Fonctions:

    And: Fonction principale qui rend (génère) l'interface utilisateur du composant `And`.

**/

import React from "react";
import { View } from "react-native";
import Title from "../Title/Title";
import Subtitle from "../Subtitle/Subtitle";
import { s } from "./And.style";

function And({ txtTitle, txtSubtitle }) {
  return (
    <View>
      <View style={s.container}>
        <View style={s.divider} />
        <Title txtTitle={txtTitle} style={s.and} />
        <View style={s.divider} />
      </View>
        <Subtitle txtSubtitle={txtSubtitle} style={s.qrCode} />
    </View>
  );
}

export default React.memo(And);
