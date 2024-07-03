/**
          --- SignUp1Screen.jsx ---

  * Description:

    Ce fichier définit le composant d'écran `SignUp1Screen`, qui est la première étape du processus d'inscription.
 Cet écran demande aux utilisateurs de contacter leur parrain pour obtenir les codes d'inscription nécessaires.

  * Props:
    Aucune

  * Variables:
    navigation: Utilise le hook `useNavigation` de `@react-navigation/native` pour permettre la navigation entre les écrans.

  * Composants:

    Layout: Composant de mise en page enveloppant l'écran pour appliquer une structure et des styles cohérents.
    View: Conteneur principal pour structurer les éléments internes de l'écran.
    Header: Composant d'en-tête affichant le titre et le sous-titre avec des instructions pour l'utilisateur.
    CatchPhrase: Composant affichant des phrases d'accroche pour guider l'utilisateur.
    FormSignUp1: Formulaire permettant à l'utilisateur de s'inscrire en fournissant les codes d'inscription.

  * Fonctions:
    SignUp1Screen: Fonction principale qui rend l'interface utilisateur de l'écran `SignUp1Screen`.

**/

import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Layout from "../../Components/Layout/Layout";
import Header from "../../Components/Header/Header";
import CatchPhrase from '../../Components/CatchPhrase/CatchPhrase';
import FormSignUp1 from "../../Components/Form/FormSignUp1";
import { s } from "./SignUp1Screen.style";

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
