import React from 'react';
import { View, Text, } from 'react-native';
import { s } from './Subtitle.style';

export function Subtitle({txtSubtitle, style}){
    return (
    <View>
        <Text style = {[s.txtSubtitle, style]}>{txtSubtitle}</Text>
    </View>
)}