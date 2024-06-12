import React from 'react';
import { Image, View } from 'react-native';
import { s } from './MiniLogo.style';

export function MiniLogo({style}) {
    return (    
    <Image 
    style={s.logo} 
    source={require('../../Assets/logo.png')}/>
    
)}



