import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Layout from "../../Components/Layout/Layout";
import Header from "../../Components/Header/Header";
import CatchPhrase from '../../Components/CatchPhrase/CatchPhrase';
import FormSignUp1 from "../../Components/Form/FormSignUp1";
import { s } from "./SignUp1Screen.style.non_commenté";

function SignUp1Screen() {
  const navigation = useNavigation();

  return (
    <Layout>
      <View style={s.container}>
        <View>
          <Header
            txtTitle="Bienvenue sur LifeFusion"
            txtSubtitle={
              "Veuillez contacter votre parrain,  " +
              "\n" +
              " pour les codes d'inscription"
            }
            style={s.subtitle}
          />
        </View>
        <View style={s.contentAd}>
          <CatchPhrase 
          style={[s.catchTitle, s.catchSubtitle]}
          txtTitle="préinscription"
          txtSubtitle="Uniquement sur invitation"
          />
        </View>   
        <FormSignUp1 />
      </View>
    </Layout>
  );
}

export default React.memo(SignUp1Screen);
