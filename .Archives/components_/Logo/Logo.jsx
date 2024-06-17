import React from 'react';
import { Image } from 'react-native';
import { s } from './logo.style';

export function Logo(){
    return (
    
    <Image style={s.image} source={require('../../assets/logo.png')}/>
)}



