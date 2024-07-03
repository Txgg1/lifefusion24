/**
          --- MiniLogo.jsx ---

  * Description:

    Ce fichier définit le composant `MiniLogo`, qui affiche un logo avec des styles personnalisables.

  * Props:
    - style: Style supplémentaire appliqué à l'image du logo.

  * Variables:
    Aucune

  * Composants:

    Image: Composant affichant l'image du logo.

  * Fonctions:

    MiniLogo: Fonction principale qui rend (génère) l'interface utilisateur du composant `MiniLogo`.

**/

import React from 'react';
import { Image } from 'react-native';
import { s } from './MiniLogo.style';

function MiniLogo({ style }) {
    return (    
    <Image 
    style={[s.logo, style]} 
    source={require('../../Assets/logo.png')}/>
    
)}

export default React.memo(MiniLogo);



