import React, { memo } from 'react';
import { Text } from 'react-native';
import { s } from './Title.style';

function Title({txtTitle, style}){
    return (
    
        <Text style = {[s.txtTitle, style]}>{txtTitle}</Text>
)}

export default React.memo(Title);