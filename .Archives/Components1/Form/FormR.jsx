import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Title } from '../Title/Title';
import { Subtitle } from '../Subtitle/Subtitle';
import { InputText } from '../InputText/InputText';
import { Button } from '../Button/Button';
import { s } from './FormR.style';

export function FormR() {
    const navigation = useNavigation();
    const handlePress = () => {
        navigation.navigate("Register");
    }
    return (

        <View style={s.container}>
            <Title style={ s.txtTitle } txtTitle={'Inscription'}/>
            <Subtitle style={ s.txtSubtitle } txtSubtitle={'Uniquement sur invitation'}/>
            <View style={s.wrap}>
            <InputText style={ s.txtInput } placeholder={'Votre Nom'}/>
            <InputText style={ s.txtInput } placeholder={'Code Parrain'}/>
            <InputText style={ s.txtInput } placeholder={'Code Inscription'}/>
            </View>
            <Button type="inscription" title="Inscription" />
            <Button type="connexion" title="Connexion" onPress={handlePress} />
            
        </View>

    )
}

