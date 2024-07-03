/**
          --- PartnerShip1Screen.jsx ---

  * Description:

    Ce fichier définit le composant d'écran `PartnerShip1Screen`, qui permet aux utilisateurs de partager
    l'application avec de nouveaux collaborateurs via un QR code ou d'autres méthodes de partage.

  * Props:
    Aucune

  * Variables:
    Retour: Caractère de retour utilisé pour styliser un bouton ou un texte.
    catchTitle: Texte d'accroche pour inviter les utilisateurs à partager l'application.

  * Composants:

    Layout: Composant de mise en page enveloppant l'écran pour appliquer une structure et des styles cohérents.
    View: Conteneur principal pour structurer les éléments internes de l'écran.
    Header2a: Composant d'en-tête affichant le titre et le sous-titre.
    Statistics: Composant affichant des statistiques pertinentes pour l'utilisateur.
    CatchPhrase: Composant affichant des phrases d'accroche pour guider l'utilisateur.
    LongButton: Bouton permettant de partager l'application via mail, contacts ou réseaux sociaux.
    Qrcode: Composant affichant le QR code à scanner pour partager l'application.
    And: Composant affichant un séparateur textuel "OU".

  * Fonctions:
    PartnerShip1Screen: Fonction principale qui rend (génère) l'interface utilisateur de l'écran `PartnerShip1Screen`.
    handleSharePress: Fonction de gestion de l'événement de partage, naviguant vers l'écran `OnBoarding`.

**/

import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Layout from "../../Components/Layout/Layout";
import Header2a from "../../Components/Header2a/Header2a";
import Statistics from "../../Components/Statistics/Statistics";
import CatchPhrase from "../../Components/CatchPhrase/CatchPhrase";
import LongButton from "../../Components/Button/LongButton";
import Qrcode from "../../Components/Qrcode/Qrcode";
import And from "../../Components/Divider/And";
import { s } from "./PartnerShip1Screen.style";

function PartnerShip1Screen() {

  const catchTitle =
    "Vous avez trouvé un nouveau collaborateur ?\nSuper !\nOffrez lui un compte exclusif lui permettant de rejoindre\nLifeFusion.\nUne application qui remunere le partenariat !";

  const navigation = useNavigation();

  const handleSharePress = () => {
    navigation.navigate("OnBoarding");
  };
 
  return (
    <Layout>
      <View style={s.container}>
        <Header2a txtTitle="Collaborateur n°" txtSubtitle="1237" />
        <Statistics />
        <View style={s.contentAd}>
          <CatchPhrase
            style={[s.catchTitle]}
            txtTitle="Offrir un compte LifeFusion"
          />
          <CatchPhrase style={[s.catchSubtitle]} txtSubtitle={catchTitle} />
        </View>
        <LongButton
          title="Partager (mail, contacts, reseaux sociaux)"
          onPress={handleSharePress}
        />
        <And txtTitle="OU" txtSubtitle="Scannez vos QR CODES" />
        <Qrcode />
      </View>
    </Layout>
  );
}

export default React.memo(PartnerShip1Screen);
