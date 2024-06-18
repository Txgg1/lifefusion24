import React, { memo } from "react";
import { View } from "react-native";
import Layout from "../../Components/Layout/Layout";
import FormSignUp2Show from "../../Components/Form/FormSignUp2Show";
import Header2a from "../../Components/Header2a/Header2a";
import Statistics from "../../Components/Statistics/Statistics";
import { s } from "./SignUp2aShowScreen.style";
import { connect } from 'react-redux';

function SignUp2aShowScreen({ user }) {
    return (
        <Layout>
            <View style={s.container}>
                <Header2a txtTitle={user.username} txtSubtitle={user.userId} />
                <Statistics />
                <FormSignUp2Show />
            </View>
        </Layout>
    );
}

const mapStateToProps = (state) => ({
    user: state.user,
});

export default connect(mapStateToProps)(memo(SignUp2aShowScreen));
