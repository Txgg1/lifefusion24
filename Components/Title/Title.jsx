/**
          --- Title.jsx ---

  * Description:

    Ce fichier définit le composant `Title`, qui affiche un texte de titre centré avec des styles personnalisables.

  * Props:

    - txtTitle: Texte du titre à afficher.
    - style: Style supplémentaire appliqué au texte du titre.

  * Variables:
    Aucune

  * Composants:

    Text: Composant affichant le texte du titre.

  * Fonctions:
    
    Title: Fonction principale qui rend (génère) l'interface utilisateur du composant `Title`.

**/


import React from 'react';
import { Text } from 'react-native';
import { s } from './Title.style';

function Title({txtTitle, style}){
    return (
    
        <Text style = {[s.txtTitle, style]}>{txtTitle}</Text>
)}

export default React.memo(Title);