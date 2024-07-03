/**
          --- Header.jsx ---

  * Description:

    Ce fichier définit le composant `Header`, qui affiche une section d'en-tête avec un titre, un logo et un sous-titre.

  * Props:

    - txtTitle: Texte du titre à afficher.
    - txtSubtitle: Texte du sous-titre à afficher.

  * Variables:
    Aucune

  * Composants:

    View: Conteneur principal pour structurer les éléments internes de l'en-tête.
    Title: Composant affichant le texte du titre.
    Logo: Composant affichant le logo.
    Subtitle: Composant affichant le texte du sous-titre.

  * Fonctions:
    
    Header: Fonction principale qui rend (génère) l'interface utilisateur du composant `Header`.

**/


import React from 'react';
import { View } from 'react-native';
import Title from '../Title/Title';
import Logo from '../Logo/Logo';
import Subtitle from '../Subtitle/Subtitle';
import { s } from './Header.style';


import { View } from 'react-native';
import Title from '../Title/Title';
import Logo from '../Logo/Logo';
import Subtitle from '../Subtitle/Subtitle';
import { s } from './Header.style';

    function Header({ txtTitle, txtSubtitle }) {
    return (

        <View style = { s.container }>
            <Title style={s.txtTitle} txtTitle={txtTitle}/>
            <Logo />
            <Subtitle style={s.txtSubtitle} txtSubtitle={txtSubtitle} />
        </View>

    )
}

export default React.memo(Header);

