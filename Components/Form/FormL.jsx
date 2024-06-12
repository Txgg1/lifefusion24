import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Title } from '../Title/Title';
import { Subtitle } from '../Subtitle/Subtitle';
import { InputText } from '../InputText/InputText';
import { Button } from '../Button/Button';

import { s } from './FormL.style';

export function FormL() {

    const navigation = useNavigation();

    const handleConnexionPress = () => {
        navigation.push('OnBoarding'); // Remplacer 'ConnectScreen' par le nom de votre écran de connexion
    };

    const handleInscriptionPress = () => {
        navigation.push('SignUp1'); // Remplacer 'RegisterScreen' par le nom de votre écran d'inscription
    };

    return (

        <View style={s.container}>
            <Title style={ s.txtTitle } txtTitle={'Vous etes loggé'}/>
            <Subtitle style={ s.txtSubtitle } txtSubtitle={'Uniquement sur invitation'}/>
            <InputText style={ s.txtInput } placeholder={'Votre Code Collaborateur'}/>
            <InputText style={ s.txtInput } placeholder={'Votre Password'}/>
            <Button type="connexion" title="Connexion" onPress={handleConnexionPress}>Connexion</Button>
            <Button type="inscription" title="Inscription" onPress={handleInscriptionPress}>Inscription</Button>
            
            {/* <Button  type="connexion" title="Connexion" />
            <Button type="inscription" title="Inscription" /> */}
        </View>

    )
}

