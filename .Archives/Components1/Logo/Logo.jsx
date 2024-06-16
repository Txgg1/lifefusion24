import React from 'react';
import { Image } from 'react-native';
import { s } from './Logo.style';

export function Logo(){
    return (
    
    <Image style={s.image} source={require('../../Assets/logo.png')}/>
)}



