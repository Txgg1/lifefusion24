import React, { memo } from "react";
import { View, TouchableOpacity, Text, Alert, Share } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Layout from "../../Components/Layout/Layout";
import Header2a from "../../Components/Header2a/Header2a";
import Statistics from "../../Components/Statistics/Statistics";
import CatchPhrase from "../../Components/CatchPhrase/CatchPhrase";
import LongButton from "../../Components/Button/LongButton";
import Qrcode from "../../Components/Qrcode/Qrcode";
import And from "../../Components/Divider/And";
import { s } from "./PartnerShip1Screen.style";
import { connect } from 'react-redux';

function PartnerShip1Screen({user}) {

  const Retour = String.fromCharCode(60);
  const catchTitle =
    "Vous avez trouvé un nouveau collaborateur ?\nSuper !\nOffrez lui un compte exclusif lui permettant de rejoindre\nLifeFusion.\nUne application qui remunere le partenariat !";

  const navigation = useNavigation();

  const handleSharePress = async () => {
    try {
      const result = await Share.share({
        message:
          'Découvrez LifeFusion ! Une application qui rémunère le partenariat. Offrez un compte exclusif à vos nouveaux collaborateurs.',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // partagée avec le type d'activité result.activityType
        } else {
          // partagée
        }
      } else if (result.action === Share.dismissedAction) {
        // annulée
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  // const handleQrcodePress = () => {
  //   navigation.navigate("OnBoarding");
  // };

  return (
    <Layout>
      <View style={s.container}>
        <Header2a txtTitle={user.username} txtSubtitle={user.userId} />
        <Statistics />
        <View style={s.contentAd}>
          <CatchPhrase
            style={[s.catchTitle]}
            txtTitle="Offrir un compte LifeFusion"
          />
          <CatchPhrase style={[s.catchSubtitle]} txtSubtitle={catchTitle} />
        </View>
        <LongButton
          title="Partager (mail, contacts, réseaux sociaux)"
          onPress={handleSharePress}
        />
        <And txtTitle="OU" txtSubtitle="Scannez vos QR CODES" />
        <Qrcode />
      </View>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(memo(PartnerShip1Screen));
