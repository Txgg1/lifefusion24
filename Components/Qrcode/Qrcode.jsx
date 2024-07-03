/**
          --- Qrcode.jsx ---

  * Description:

    Ce fichier définit le composant `Qrcode`, qui affiche deux boutons carrés pour générer des codes QR pour l'application et l'affiliation.

  * Props:
    Aucune

  * Variables:
    Aucune

  * Composants:

    View: Conteneur principal pour structurer les boutons QR code.
    SquareButton: Boutons carrés permettant de générer des codes QR pour l'application et l'affiliation.

  * Fonctions:

    Qrcode: Fonction principale qui rend (génère) l'interface utilisateur du composant `Qrcode`.

**/

import React from 'react';
import { View } from 'react-native';
import SquareButton from '../Button/SquareButton';
import { s } from './Qrcode.style';

    function Qrcode(){
    return (
    
        <View style={s.container}>
            <SquareButton
            type="inscription"
            title="Generer code Application"
            />
            <SquareButton
            type="inscription"
            title="Generer code Affiliation"
            />
        </View>
    
)}

export default React.memo(Qrcode);

