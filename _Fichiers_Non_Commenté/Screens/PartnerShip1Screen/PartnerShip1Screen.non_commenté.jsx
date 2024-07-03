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
import { s } from "./PartnerShip1Screen.non_commenté.style";

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
