import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { Title } from '../Title/Title';
import { Subtitle } from '../Subtitle/Subtitle';
import { InputText } from '../InputText/InputText';^
46:
import { Button } from '../Button/Button';
import { s } from './FormC.style';

export function FormC() {
    const navigation = useNavigation();
    const handlePress = () => {
        navigation.navigate("Register");
    }

    return (
        <View style={s.container}>
            <Title style={ s.txtTitle } txtTitle={'connectez-vous'}/>
            <Subtitle style={ s.txtSubtitle } txtSubtitle={'Uniquement sur invitation'}/>
            <InputText style={ s.txtInput } placeholder={'Votre code'}/>
            <InputText style={ s.txtInput } placeholder={'Votre Password'}/>
            <Button type="connexion" title="Connexion" />
            <Button type="inscription" title="Inscription" onPress={handlePress} />
        </View>

    )   
}

