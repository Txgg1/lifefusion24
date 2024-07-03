/**
          --- Photo.jsx ---

  * Description:

    Ce fichier définit le composant `Photo`, qui affiche une image avec des styles personnalisables.

  * Props:
    - style: Style supplémentaire appliqué à l'image.

  * Variables:
    Aucune

  * Composants:
    Image: Composant affichant l'image.

  * Fonctions:
    Photo: Fonction principale qui rend (génère) l'interface utilisateur du composant `Photo`.

**/

import React from 'react';
import { Image } from 'react-native';
import { s } from './Photo.style';

    function Photo({style}){
    return (
    
    <Image 
    style={[s.photo, style]} 
    source={require('../../Assets/CAT.png')}/>
    
)}

export default React.memo(Photo);



