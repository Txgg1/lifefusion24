/**
          --- Subtitle.jsx ---

  * Description:

    Ce fichier définit le composant `Subtitle`, qui affiche un texte de sous-titre centré avec des styles personnalisables.

  * Props:

    - txtSubtitle: Texte du sous-titre à afficher.
    - style: Style supplémentaire appliqué au texte du sous-titre.

  * Variables:
    Aucune

  * Composants:

    View: Conteneur principal pour structurer le texte du sous-titre.
    Text: Composant affichant le texte du sous-titre.

  * Fonctions:
    
    Subtitle: Fonction principale qui rend (génère) l'interface utilisateur du composant `Subtitle`.

**/


import React from 'react';
import { View, Text, } from 'react-native';
import { s } from './Subtitle.style';

    function Subtitle({txtSubtitle, style}){
    return (
    <View>
        <Text style = {[s.txtSubtitle, style ]}>{txtSubtitle}</Text>
    </View>
)}

export default React.memo(Subtitle);