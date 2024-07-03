/**
          --- OnBoardingScreen.jsx ---

  * Description:

    Ce fichier définit le composant d'écran `OnBoardingScreen`, qui accueille les utilisateurs sur LifeFusion
    et les guide à travers le processus d'embarquement avec un formulaire.

  * Props:
    Aucune

  * Variables:
    backgroundImage: Chemin vers l'image de fond utilisée pour l'écran d'embarquement.

  * Composants:
    Layout: Composant de mise en page enveloppant l'écran pour appliquer une structure et des styles cohérents, avec une image de fond.
    View: Conteneur principal pour structurer les éléments internes de l'écran.
    Header: Composant d'en-tête affichant le titre de bienvenue.
    FormOnBoarding: Formulaire permettant à l'utilisateur de compléter le processus d'embarquement.

  * Fonctions:
    OnBoardingScreen: Fonction principale qui rend (génère) l'interface utilisateur de l'écran `OnBoardingScreen`.

**/

import React from "react";
import { View } from "react-native";
import Layout from "../../Components/Layout/Layout";
import Header from "../../Components/Header/Header";
import FormOnBoarding from "../../Components/Form/FormOnBoarding";
import backgroundImage from '../../Assets/Bg3.jpg'; // Chemin vers votre image de fond
import { s } from "./OnBoardingScreen.style";

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
