import React, { memo } from 'react';
import { View } from 'react-native';
import Title from '../Title/Title';
import Logo from '../Logo/Logo';
import Subtitle from '../Subtitle/Subtitle';
import { s } from './Header.style';

    function Header({ txtTitle, txtSubtitle }) {
    return (

        <View style = { s.container }>
            <Title style={s.txtTitle} txtTitle={txtTitle}/>
            <Logo />
            <Subtitle style={s.txtSubtitle} txtSubtitle={txtSubtitle} />
        </View>

    )
}

export default React.memo(Header);

