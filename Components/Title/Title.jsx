import React from 'react';
import { Text } from 'react-native';
import { s } from './Title.style';

export function Title({txtTitle, style}){
    return (
    
        <Text style = {[s.txtTitle, style]}>{txtTitle}</Text>
)}