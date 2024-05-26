import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { connect } from "react-redux";


import { BigButton } from '../Button/BigButton';

import { s } from './FormSignUp2Hide.style';

export function FormSignUp2Hide() {
    const navigation = useNavigation();

    const handleData1Press = () => {
        navigation.push('SignUp3Data1'); // Remplacer 'ConnectScreen' par le nom de votre écran de connexion
    };

    const handleSharePress = () => {
        navigation.push('OnBoarding'); // Remplacer 'RegisterScreen' par le nom de votre écran d'inscription
    };

    const handleShipPress = () => {
        navigation.push('SignUp2Hide'); // Remplacer 'RegisterScreen' par le nom de votre écran d'inscription
    };
    return (

        <View style={s.container}>
            
            <BigButton type="inscription" title="Données Personnelles" onPress={handleData1Press}>Inscription</BigButton>
            <BigButton disabled={true} style = {s.disabled} type="connexion" title="Connexion" onPress={handleSharePress}>Connexion</BigButton>
            <BigButton disabled={true} style = {s.disabled} type="inscription" title="Inscription" onPress={handleShipPress}>Inscription</BigButton>
            
        </View>

    )
}

