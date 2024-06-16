import React from 'react';
import { View } from 'react-native';
import { Title } from '../Title/Title';
import { Logo } from '../Logo/Logo';
import { Subtitle } from '../Subtitle/Subtitle';
import { s } from './Header.style';

export function Header({ txtTitle, txtSubtitle, }) {
    return (

        <View style = { s.container }>
            <Title txtTitle={txtTitle}/>
            <Logo />
            <Subtitle txtSubtitle={txtSubtitle}/>
        </View>

    )
}

