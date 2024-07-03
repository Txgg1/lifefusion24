import React, { memo } from 'react';
import { View, Text, } from 'react-native';
import { s } from './Subtitle.style';

    function Subtitle({txtSubtitle, style}){
    return (
    <View>
        <Text style = {[s.txtSubtitle, style ]}>{txtSubtitle}</Text>
    </View>
)}

export default React.memo(Subtitle);