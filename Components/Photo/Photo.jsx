import React from 'react';
import { Image, View} from 'react-native';
import { s } from './Photo.style';

export function Photo({style}){
    return (
    
    <Image 
    style={s.photo} 
    source={require('../../Assets/CAT.png')}/>
    
)}



