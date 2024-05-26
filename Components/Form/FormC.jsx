import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Title } from '../Title/Title';
import { Subtitle } from '../Subtitle/Subtitle';
import { InputText } from '../InputText/InputText';
import { Button } from '../Button/Button';

import { s } from './FormC.style';

export function FormC() {

    const navigation = useNavigation();

    const handleInscriptionPress = () => {
    navigation.navigate('SignUp1');
  };
  
    const handleConnexionPress = () => {
        navigation.push('SignUp2Hide'); // Remplacer 'ConnectScreen' par le nom de votre écran de connexion
    };

   

    return (

        <View style={s.container}>
            <Title style={ s.txtTitle } txtTitle={'Veuillez vous inscrire'}/>
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

