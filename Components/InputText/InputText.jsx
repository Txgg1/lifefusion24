import React from 'react';
import { TextInput } from 'react-native';
import { s } from '../InputText/InputText.style';

export function InputText({placeholder, style, onChangeText, value}){
    return (    
        <TextInput style={[s.txtInput, style]} placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}/>        
)}