import React from "react";
import { View } from "react-native";
import Layout from "../../Components/Layout/Layout";
import Header from "../../Components/Header/Header";
import FormOnBoarding from "../../Components/Form/FormOnBoarding";
import backgroundImage from '../../Assets/Bg3.jpg'; // Chemin vers votre image de fond
import { s } from "./OnBoardingScreen.style.non_commenté";

  function OnBoardingScreen() {
  return (
    <Layout backgroundImage={backgroundImage}>
      <View style={s.container}>
        <Header 
          style={s.txtTitle} 
          txtTitle="Bienvenue sur LifeFusion"
        />
        <FormOnBoarding />
      </View>
    </Layout>
  );
}

export default React.memo(OnBoardingScreen);
