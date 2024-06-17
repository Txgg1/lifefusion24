import React, { memo } from 'react';
import { Image } from 'react-native';
import { s } from './Photo.style';

    function Photo({style}){
    return (
    
    <Image 
    style={[s.photo, style]} 
    source={require('../../Assets/CAT.png')}/>
    
)}

export default React.memo(Photo);



