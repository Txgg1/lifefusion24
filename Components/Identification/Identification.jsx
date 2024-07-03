/**
          --- Identification.jsx ---

  * Description:

    Ce fichier définit le composant `Identification`, qui affiche un titre et un sous-titre pour identifier une entité
    ou une statistique spécifique.

  * Props:

    - txtTitle: Texte du titre à afficher.
    - txtSubtitle: Texte du sous-titre à afficher.
    - style: Style supplémentaire appliqué au conteneur du composant.

  * Variables:
    Aucune

  * Composants:

    View: Conteneur principal pour structurer le titre et le sous-titre.
    Title: Composant affichant le texte du titre.
    Subtitle: Composant affichant le texte du sous-titre.

  * Fonctions:
    
    Identification: Fonction principale qui rend (génère) l'interface utilisateur du composant `Identification`.

**/


import React from 'react';
import { View } from 'react-native';
import Title from '../Title/Title';
import Subtitle from '../Subtitle/Subtitle';
import { s } from './Identification.style';

    function Identification({txtTitle, txtSubtitle, style }) {
   

    return (

        <View style = {[s.container, style]}>
           <Title style = {s.title} txtTitle={txtTitle} />
           <Subtitle style = {s.subtitle} txtSubtitle={txtSubtitle} />    
        </View>

    )
}

export default React.memo(Identification);
