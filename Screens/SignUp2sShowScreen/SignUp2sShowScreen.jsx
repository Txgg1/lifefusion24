import React, { memo } from "react";
import { View } from "react-native";
import Layout from "../../Components/Layout/Layout";
import FormSignUp2Show from "../../Components/Form/FormSignUp2Show";
import Header2s from "../../Components/Header2s/Header2s";
import Statistics from "../../Components/Statistics/Statistics";
import { s } from "./SignUp2sShowScreen.style";
import { connect } from "react-redux";

function SignUp2sShowScreen({user}) {
  return (
    <Layout>
      <View style={s.container}>
        <Header2s txtTitle={user.username} txtSubtitle={user.userId} />
        <Statistics />
        <FormSignUp2Show />
      </View>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(React.memo(SignUp2sShowScreen));
