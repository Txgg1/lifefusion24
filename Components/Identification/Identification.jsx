import React, { memo, useEffect } from 'react';
import { View } from 'react-native';
import Title from '../Title/Title';
import Subtitle from '../Subtitle/Subtitle';
import { s } from './Identification.style';
import { connect } from 'react-redux';

function Identification({ txtTitle, txtSubtitle, style, user }) {


    return (
        <View style={[s.container, style]}>
            <Title style={s.title} txtTitle={txtTitle || (user.userId ? user.username : "N/A")} />
            <Subtitle style={s.subtitle} txtSubtitle={txtSubtitle || (user.userId ? user.userId : "N/A")} />
        </View>
    );
}

const mapStateToProps = (state) => ({
    user: state.user.user
});

export default connect(mapStateToProps)(memo(Identification));
