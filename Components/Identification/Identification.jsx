import React, { memo } from 'react';
import { View } from 'react-native';
import Title from '../Title/Title';
import Subtitle from '../Subtitle/Subtitle';
import { s } from './Identification.style';

    function Identification({txtTitle, txtSubtitle, style }) {
   

    return (

        <View style = {[s.container, style]}>
           <Title style = {s.title} txtTitle={txtTitle} />
           <Subtitle style = {s.subtitle} txtSubtitle={txtSubtitle} />    
        </View>

    )
}

export default React.memo(Identification);
