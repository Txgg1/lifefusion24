import React, { memo } from 'react';
import { View } from 'react-native';
import Title from '../Title/Title';
import Subtitle from '../Subtitle/Subtitle';
import { s } from './Identification.style';
import { connect } from 'react-redux'

    function Identification({txtTitle, txtSubtitle, style, userId,user }) {
   

    return (

        <View style = {[s.container, style]}>
           <Title style = {s.title} txtTitle={user ? user.username : "N/A"} />
           <Subtitle style = {s.subtitle} txtSubtitle={userId ? userId : "hello" } />    
        </View>

    )
}

const mapStateToProps = (state) => ({
    userId: state.user.userId,
    user: state.user
});

export default connect(mapStateToProps)(React.memo(Identification));
