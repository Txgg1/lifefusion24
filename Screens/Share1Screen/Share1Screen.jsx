/**
          --- Share1Screen.jsx ---

  * Description:

    Ce fichier définit le composant d'écran `Share1Screen`, qui permet aux utilisateurs de partager des informations
    ou des annonces spécifiques via un formulaire. Cet écran affiche également des statistiques et un en-tête.

  * Props:
    Aucune

  * Variables:
    Aucune

  * Composants:

    Layout: Composant de mise en page enveloppant l'écran pour appliquer une structure et des styles cohérents.
    View: Conteneur principal pour structurer les éléments internes de l'écran.
    Header2a: Composant d'en-tête affichant le titre et le sous-titre.
    Statistics: Composant affichant des statistiques pertinentes pour l'utilisateur.
    FormShare1: Formulaire permettant à l'utilisateur de partager des informations ou des annonces.

  * Fonctions:
    Share1Screen: Fonction principale qui rend (génère) l'interface utilisateur de l'écran `Share1Screen`.

**/

import React from "react";
import { View } from "react-native";
import Layout from "../../Components/Layout/Layout";
import Header2a from "../../Components/Header2a/Header2a";
import Statistics from "../../Components/Statistics/Statistics";
import FormShare1 from "../../Components/Form/FormShare1";
import { s } from "./Share1Screen.style";

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
