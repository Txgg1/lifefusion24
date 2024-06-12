import React from 'react';
import { View } from 'react-native';
import { Title } from '../Title/Title';
import { Subtitle } from '../Subtitle/Subtitle';
import { s } from './Identification.style';

export function Identification({txtTitle, txtSubtitle, style }) {
   

    return (

        <View style = {s.container}>
           <Title style = {s.title} txtTitle="Collaborateur n°" />
           <Subtitle style = {s.subtitle} txtSubtitle="1237" />    
        </View>

    )
}
