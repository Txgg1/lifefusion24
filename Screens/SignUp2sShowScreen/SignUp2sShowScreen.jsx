/**
          --- SignUp2sShowScreen.jsx ---

  * Description:

    Ce fichier définit le composant d'écran `SignUp2sShowScreen`(sans avatar), qui est une étape du processus d'inscription.
    Cet écran permet aux utilisateurs de renseigner des informations spécifiques dans le cadre de l'inscription.

  * Props:
    Aucune

  * Variables:
    Aucune

  * Composants:

    Layout: Composant de mise en page enveloppant l'écran pour appliquer une structure et des styles cohérents.
    View: Conteneur principal pour structurer les éléments internes de l'écran.
    Header2s: Composant d'en-tête affichant le titre et le sous-titre.
    Statistics: Composant affichant des statistiques pertinentes pour l'utilisateur.
    FormSignUp2Show: Formulaire pour que l'utilisateur renseigne des informations spécifiques à cette étape d'inscription.

  * Fonctions:
    SignUp2sShowScreen: Fonction principale qui rend (génére) l'interface utilisateur de l'écran `SignUp2sShowScreen`.

**/

import React from "react";
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
