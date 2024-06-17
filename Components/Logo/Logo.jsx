import React, { memo } from 'react';
import { Image } from 'react-native';
import { s } from './Logo.style';

    function Logo(){
    return (
    
    <Image style={s.image} source={require('../../Assets/logo.png')}/>
)}

export default React.memo(Logo);


