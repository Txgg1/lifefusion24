/**
         --- SignUp3Data1Screen.jsx ---

  * Description:

    Ce fichier définit le composant d'écran `SignUp3Data1Screen`, qui est une étape du processus d'inscription.
    Cet écran permet aux utilisateurs de renseigner leurs données personnelles après avoir rejoint l'application.

  * Props:
    Aucune

  * Variables:
  
    navigation: Utilise le hook `useNavigation` de `@react-navigation/native` pour permettre la navigation entre les écrans.

  * Composants:
  
    Layout: Composant de mise en page enveloppant l'écran pour appliquer une structure et des styles  cohérents
    Permet de definir un Background personnalisé pour chaque ecran ou utiliser un background unique pour tous les ecrans.
    View: Conteneur principal pour structurer les éléments internes de l'écran.
    Header2s: Composant d'en-tête affichant le titre et le sous-titre.
    CatchPhrase: Composant affichant des phrases d'accroche pour guider l'utilisateur.
    FormSignUp3Data1: Formulaire pour que l'utilisateur renseigne ses données personnelles.
  
  * Fonctions:
  
    SignUp3Data1Screen: Fonction principale qui rend l'interface utilisateur de l'écran `SignUp3Data1Screen`.
    Ici on memorise l'export avec React.memo

**/

import React from "react";
import { View } from "react-native";
import Header2s from "../../Components/Header2s/Header2s";
import Statistics from "../../Components/Statistics/Statistics";
import FormSignUp3Data1 from "../../Components/Form/FormSignUp3Data1";
import CatchPhrase from "../../Components/CatchPhrase/CatchPhrase";

import { useNavigation } from "@react-navigation/native";
import Layout from "../../Components/Layout/Layout";
import { s } from "./SignUp3Data1Screen.style";

function SignUp3Data1Screen() {
  const navigation = useNavigation();

  return (
    <Layout>
      <View style={s.container}>
        <Header2s txtTitle="Collaborateur n°" txtSubtitle="1237" />
        {/* <Statistics /> */}
        <View style={s.contentAd}>
          <CatchPhrase
            style={[s.catchSubtitle]}
            txtSubtitle="Merci de nous avoir rejoint"
          />
          <CatchPhrase
            style={[s.catchTitle]}
            txtTitle="Veuillez reinseigner vos données personnelles"
          />
        </View>
        <FormSignUp3Data1 />
      </View>
    </Layout>
  );
}

export default React.memo(SignUp3Data1Screen);
