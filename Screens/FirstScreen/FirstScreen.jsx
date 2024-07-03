/**
          --- FirstScreen.jsx ---

  * Description:

    Ce fichier définit le composant d'écran `FirstScreen`, qui accueille les utilisateurs sur LifeFusion
    et leur permet de se connecter ou de s'inscrire en naviguant vers l'écran d'embarquement.

  * Props:

    navigation: Objet de navigation fourni par React Navigation pour permettre la navigation entre les écrans.

  * Variables:

    txtSubtitle: Texte d'accroche pour le sous-titre du Header.
    backgroundImage: Chemin vers l'image de fond utilisée pour l'écran d'accueil.

  * Composants:

    Layout: Composant de mise en page enveloppant l'écran pour appliquer une structure et des styles cohérents, avec une image de fond.
    View: Conteneur principal pour structurer les éléments internes de l'écran.
    Header: Composant d'en-tête affichant le titre et le sous-titre de bienvenue.
    CatchPhrase: Composant affichant des phrases d'accroche pour guider l'utilisateur.
    Button: Bouton permettant de naviguer vers l'écran de connexion ou d'inscription.

  * Fonctions:

    FirstScreen: Fonction principale qui rend (génère) l'interface utilisateur de l'écran `FirstScreen`.
    handleConnexionPress: Fonction de gestion de l'événement pour naviguer vers l'écran `OnBoarding` pour la connexion.
    handleInscriptionPress: Fonction de gestion de l'événement pour naviguer vers l'écran `OnBoarding` pour l'inscription.

**/

import React from "react";
import { View} from "react-native";
import Header from "../../Components/Header/Header";
import Button from "../../Components/Button/Button";
import Layout from "../../Components/Layout/Layout";
import CatchPhrase from "../../Components/CatchPhrase/CatchPhrase";
import backgroundImage from '../../Assets/Bg2.png';

import { s } from "./FirstScreen.style";

  function FirstScreen({ navigation }) {

  const txtSubtitle = "Partagez vos opportunités immobilières,\ncréez des synergies.";

  const handleConnexionPress = () => {
    navigation.navigate("OnBoarding");
  };

  const handleInscriptionPress = () => {
    navigation.navigate("OnBoarding");
  };

  return (
    <Layout backgroundImage={backgroundImage}>
    {/* <Layout> */}
      <View style={s.container}>
        <View style={s.contentHeader}>
          <Header
            txtTitle="Bienvenue sur LifeFusion"
            txtSubtitle={txtSubtitle}

          />
        </View>
        <View style={s.contentAd}>
          <CatchPhrase
            style={[s.catchTitle, s.catchSubtitle]}
            txtTitle="REJOIGNEZ-NOUS"
            txtSubtitle="Uniquement sur invitation"
          />
        </View>
        <View style={s.contentBtn}>
          <CatchPhrase
            style={[s.catchTitle, s.catchSubtitle]}
            txtSubtitle="Vous avez déjà un compte LifeFusion ?"
          />
          <Button title="Connectez-vous" onPress={handleConnexionPress} />
        </View>
        <View style={s.contentFooter}>
          <CatchPhrase
            style={[s.txtTitle, s.txtSubtitle,s.lineHeight]}
            txtSubtitle="Vous n'avez pas de compte LifeFusion  ?"
          />
          <Button
            type="inscription"
            title="FAITES VOUS INVITER"
            onPress={handleInscriptionPress}
          />
        </View>
      </View>
    </Layout>
  );
}

export default React.memo(FirstScreen);
