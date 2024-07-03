import React, { memo } from 'react';
import { View } from 'react-native';
import SquareButton from '../Button/SquareButton';
import { s } from './Qrcode.style';

    function Qrcode(){
    return (
    
        <View style={s.container}>
            <SquareButton
            type="inscription"
            title="Generer code Application"
            />
            <SquareButton
            type="inscription"
            title="Generer code Affiliation"
            />
        </View>
    
)}

export default React.memo(Qrcode);

