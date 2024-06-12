// Identification.jsx
import React from 'react';
import { View } from 'react-native';
import { Title } from '../Title/Title';
import { Subtitle } from '../Subtitle/Subtitle';
import { s } from './Identification.style';
import { connect } from 'react-redux';

function Identification({ userId }) {
    return (
        <View style={s.container}>
            <Title style={s.title} txtTitle="Collaborateur n°" />
            <Subtitle style={s.subtitle} txtSubtitle={userId ? userId.toString() : "N/A"} />    
        </View>
    );
}

const mapStateToProps = (state) => ({
    userId: state.user.userId,
});

export default connect(mapStateToProps)(Identification);
