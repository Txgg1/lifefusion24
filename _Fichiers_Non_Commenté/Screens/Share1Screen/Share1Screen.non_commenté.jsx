import React from "react";
import { View } from "react-native";
import Layout from "../../Components/Layout/Layout";
import Header2a from "../../Components/Header2a/Header2a";
import Statistics from "../../Components/Statistics/Statistics";
import FormShare1 from "../../Components/Form/FormShare1";
import { s } from "./Share1Screen.non_commenté.style";

function Share1Screen() {
  return (
    <Layout>
      <View style={s.container}>
        <Header2a txtTitle="Patricia Lifeimmo" txtSubtitle="1237" />
        <Statistics />
        <FormShare1 />
      </View>
    </Layout>
  );
}

export default React.memo(Share1Screen);
