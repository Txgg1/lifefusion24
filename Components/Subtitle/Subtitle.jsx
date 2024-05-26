import React from 'react';
import { View, Text, } from 'react-native';
import { s } from './Subtitle.style';

export function Subtitle({txtSubtitle, txtEtape, style}){
    return (
    <View>
        <Text style = {[s.txtSubtitle, style, txtEtape = {txtEtape}]}>{txtSubtitle}</Text>
    </View>
)}