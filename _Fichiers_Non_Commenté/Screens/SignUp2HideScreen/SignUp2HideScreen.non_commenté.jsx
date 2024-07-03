import React, { memo } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../../../Components/Header/Header";
import FormSignUp2Hide from "../../../Components/Form/FormSignUp2Hide";
import Layout from "../../../Components/Layout/Layout";
import { s } from "./SignUp2HideScreen.style.non_commenté";

function SignUp2HideScreen() {
  const navigation = useNavigation();

  return (
    <Layout>
      <View style={s.container}>
        <View>
          <Header
            style={s.txtSubtitle}
            txtTitle="Bienvenue sur LifeFusion"
            txtSubtitle={
              "Pour acceder a toutes les foctionnalités," +
              "\n" +
              " veuillez creer votre account et reinseigner" +
              "\n" +
              " vos données personnelles"
            }
          />
        </View>
        <FormSignUp2Hide />
      </View>
    </Layout>
  );
}

export default memo(SignUp2HideScreen);
