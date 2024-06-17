import React, { memo } from "react";
import { View } from "react-native";
import Layout from "../../Components/Layout/Layout";
import FormSignUp2Show from "../../Components/Form/FormSignUp2Show";
import Header2s from "../../Components/Header2s/Header2s";
import Statistics from "../../Components/Statistics/Statistics";
import { s } from "./SignUp2sShowScreen.style";

function SignUp2sShowScreen() {
  return (
    <Layout>
      <View style={s.container}>
        <Header2s txtTitle="Patricia Lifeimmo" txtSubtitle="1237" />
        <Statistics />
        <FormSignUp2Show />
      </View>
    </Layout>
  );
}

export default React.memo(SignUp2sShowScreen);
