/**
          --- Logo.jsx ---

  * Description:

    Ce fichier définit le composant `Logo`, qui affiche une image de logo.

  * Props:
    Aucune

  * Variables:
    Aucune

  * Composants:
    Image: Composant affichant l'image du logo.

  * Fonctions:
    Logo: Fonction principale qui rend (génère) l'interface utilisateur du composant `Logo`.

**/

import React from 'react';
import { Image } from 'react-native';
import { s } from './Logo.style';

    function Logo(){
    return (
    
    <Image style={s.image} source={require('../../Assets/logo.png')}/>
)}

export default React.memo(Logo);


