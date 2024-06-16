import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BigButton } from '../Button/BigButton';
import { s } from './FormSignUp2Show.style';

export function FormSignUp2Show() {

    const navigation = useNavigation();

    const handleData1Press = () => {
        navigation.push('OnBoarding'); // Remplacer 'ConnectScreen' par le nom de votre écran de connexion
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
            <BigButton type="connexion" title="Partage" onPress={handleSharePress}>Connexion</BigButton>
            <BigButton type="inscription" title="Affiliation" onPress={handleShipPress}>Inscription</BigButton>
            
        </View>

    )
}

