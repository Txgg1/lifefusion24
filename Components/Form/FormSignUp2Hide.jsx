/**
          --- FormSignUp2Hide.jsx ---

  * Description:

    Ce fichier définit le composant `FormSignUp2Hide`, qui affiche des boutons pour accéder aux données personnelles, au partage et à l'affiliation, avec certains boutons désactivés par défaut.

  * Props:
    Aucune

  * Variables:

    - txtData: Texte affiché sur le bouton des données personnelles.
    - navigation: Hook de navigation pour gérer la navigation entre les écrans.
    - handleData1Press: Fonction de gestion de l'événement pour naviguer vers l'écran `SignUp3Data1`.
    - handleSharePress: Fonction de gestion de l'événement pour naviguer vers l'écran `OnBoarding`.
    - handleShipPress: Fonction de gestion de l'événement pour naviguer vers l'écran `SignUp2Hide`.

  * Composants:

    View: Conteneur principal pour structurer les éléments internes du formulaire.
    BigButton: Boutons pour accéder aux données personnelles, au partage et à l'affiliation.

  * Fonctions:

    FormSignUp2Hide: Fonction principale qui rend (génère) l'interface utilisateur du composant `FormSignUp2Hide`.
    handleData1Press: Fonction de gestion de l'événement pour naviguer vers l'écran `SignUp3Data1`.
    handleSharePress: Fonction de gestion de l'événement pour naviguer vers l'écran `OnBoarding`.
    handleShipPress: Fonction de gestion de l'événement pour naviguer vers l'écran `SignUp2Hide`.

**/


import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BigButton from '../Button/BigButton';

import { s } from './FormSignUp2Hide.style';

    function FormSignUp2Hide() {

    const txtData = "Données\nPersonnelles";    
    const navigation = useNavigation();

    const handleData1Press = () => {
        navigation.push('SignUp3Data1');
    };

    const handleSharePress = () => {
        navigation.push('OnBoarding');
    };

    const handleShipPress = () => {
        navigation.push('SignUp2Hide');
    };
    
    return (

        <View style={s.container}>
            
            <BigButton type="connexion" title={txtData} onPress={handleData1Press}/>
            <BigButton disabled={true} style = {s.disabledButton} type="connexion" title="Partage" onPress={handleSharePress}/>
            <BigButton disabled={true} style = {s.disabledButton} type="inscription" title="Affiliation" onPress={handleShipPress}/>
            
        </View>

    )
}

export default React.memo(FormSignUp2Hide);

