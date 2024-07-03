import React, { memo } from 'react';
import { Image } from 'react-native';
import { s } from './MiniLogo.style';

function MiniLogo({ style }) {
    return (    
    <Image 
    style={[s.logo, style]} 
    source={require('../../Assets/logo.png')}/>
    
)}

export default React.memo(MiniLogo);



