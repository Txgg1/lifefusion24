import React, { memo } from "react";
import { View} from "react-native";
import Header from "../../Components/Header/Header";
import Button from "../../Components/Button/Button";
import Layout from "../../Components/Layout/Layout";
import CatchPhrase from "../../Components/CatchPhrase/CatchPhrase";
import backgroundImage from '../../Assets/Bg2.png'; // Chemin vers votre image de fond

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
            // txtSubtitle={"Partagez vos opportunités immobilières," +"\n"+"créez des synergies."}
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
