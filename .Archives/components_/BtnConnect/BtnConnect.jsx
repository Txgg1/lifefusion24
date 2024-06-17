import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { s } from './btnConnect.style';

export function BtnConnect(){
    return (
    
        <TouchableOpacity style={s.connect}><Text style={s.text}>Connexion</Text></TouchableOpacity>
        
)}

