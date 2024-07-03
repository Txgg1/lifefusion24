/**
          --- SignUp2HideScreen.jsx ---

  * Description:

    Ce fichier définit le composant d'écran `SignUp2HideScreen`, qui est une étape du processus d'inscription.
    Cet écran demande aux utilisateurs de créer un compte et de renseigner leurs données personnelles 
    pour accéder à toutes les fonctionnalités de l'application.

  * Props:
    Aucune

  * Variables:
    navigation: Utilise le hook `useNavigation` de `@react-navigation/native` pour permettre la navigation entre les écrans.

  * Composants:

    Layout: Composant de mise en page enveloppant l'écran pour appliquer une structure et des styles cohérents
    View: Conteneur principal pour structurer les éléments internes de l'écran
    Header: Composant d'en-tête affichant le titre et le sous-titre avec des instructions pour l'utilisateur
    FormSignUp2Hide: Formulaire permettant à l'utilisateur de créer un compte et de renseigner ses données personnelles.

  * Fonctions:
    SignUp2HideScreen: Fonction principale qui rend l'interface utilisateur de l'écran `SignUp2HideScreen`.

**/

import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../../Components/Header/Header";
import FormSignUp2Hide from "../../Components/Form/FormSignUp2Hide";
import Layout from "../../Components/Layout/Layout";
import { s } from "./SignUp2HideScreen.style";

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

export default React.memo(SignUp2HideScreen);
