/**
          --- Divider.jsx ---

  * Description:

    Ce fichier définit le composant `Divider`, qui affiche une ligne de séparation horizontale pour structurer
    visuellement le contenu entre différentes sections de l'interface utilisateur.

  * Props:

    - style: Style supplémentaire appliqué au séparateur.

  * Variables:
    Aucune

  * Composants:

    View: Conteneur principal affichant la ligne de séparation.

  * Fonctions:
    
    Divider: Fonction principale qui rend (génère) l'interface utilisateur du composant `Divider`.

**/

import React from 'react';
import { View } from 'react-native';
import { s } from './Divider.style';

const Divider = (style) => {
  return <View style={[s.divider, style]} />;
};

export default React.memo(Divider);
