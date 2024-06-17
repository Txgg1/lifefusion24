import React, { memo } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BigButton from '../Button/BigButton';

import { s } from './FormSignUp2Hide.style';

    function FormSignUp2Hide() {

    const txtData = "Données\nPersonnelles";    
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
            
            <BigButton type="connexion" title={txtData} onPress={handleData1Press}/>
            <BigButton disabled={true} style = {s.disabledButton} type="connexion" title="Partage" onPress={handleSharePress}/>
            <BigButton disabled={true} style = {s.disabledButton} type="inscription" title="Affiliation" onPress={handleShipPress}/>
            
        </View>

    )
}

export default React.memo(FormSignUp2Hide);

