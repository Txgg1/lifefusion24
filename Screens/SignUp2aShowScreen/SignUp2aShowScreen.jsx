import React, { memo } from "react";
import { View } from "react-native";
import Layout from "../../Components/Layout/Layout";
import FormSignUp2Show from "../../Components/Form/FormSignUp2Show";
import Header2a from "../../Components/Header2a/Header2a";
import Statistics from "../../Components/Statistics/Statistics";
import { s } from "./SignUp2aShowScreen.style";

function SignUp2aShowScreen() {
  return (
    <Layout>
      <View style={s.container}>
        <Header2a txtTitle="Patricia Lifeimmo" txtSubtitle="1237" />
        <Statistics />
        <FormSignUp2Show />
      </View>
    </Layout>
  );
}

export default React.memo(SignUp2aShowScreen);
