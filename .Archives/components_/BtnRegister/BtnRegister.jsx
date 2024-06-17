import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { s } from './btnRegister.style';

export function BtnRegister(){
    return (
    
        <TouchableOpacity style={s.register}><Text style={s.text}>Inscription</Text></TouchableOpacity>
        
)}

