import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BigButton } from '../Button/BigButton';
import { s } from './FormSignUp2Show.style';

export function FormSignUp2Show() {

    const navigation = useNavigation();

    const handleData1Press = () => {
        navigation.push('SignUp3Data1'); // Remplacer 'ConnectScreen' par le nom de votre écran de connexion
    };

    const handleSharePress = () => {
        navigation.push('PartnerShip1'); // Remplacer 'RegisterScreen' par le nom de votre écran d'inscription
    };

    const handleShipPress = () => {
        navigation.push('PartnerShip1'); // Remplacer 'RegisterScreen' par le nom de votre écran d'inscription
    };

    return (

        <View style={s.container}>
            
            <BigButton type="inscription" title="Données Personnelles" onPress={handleData1Press}/>
            <BigButton type="connexion" title="Partage" onPress={handleSharePress}/>
            <BigButton type="inscription" title="Affiliation" onPress={handleShipPress}/>
            
        </View>

    )
}

