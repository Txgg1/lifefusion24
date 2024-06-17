import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BigButton from "../Button/BigButton";
import Title from "../Title/Title";
import Subtitle from "../Subtitle/Subtitle";
import { s } from "./FormSignUp2Show.style";

function FormSignUp2Show() {
  const navigation = useNavigation();

  const handleSharePress = () => {
    navigation.push("OnBoarding"); // Remplacer 'RegisterScreen' par le nom de votre écran d'inscription
  };

  const handleShipPress = () => {
    navigation.push("PartnerShip1"); // Remplacer 'RegisterScreen' par le nom de votre écran d'inscription
  };

  return (
    <View style={s.container}>
      <View style={s.buttons}>
        <BigButton
          type="inscription"
          title="Affiliation"
          onPress={handleShipPress}
        />
        <BigButton
          type="connexion"
          title="Partage"
          onPress={handleSharePress}
        />
      </View>
      <View style={s.footer}>
        <Title style={s.title} txtTitle={"Account valide !"} />
        <Subtitle
          style={s.subtitle}
          txtSubtitle={
            "vous pouvez acceder à toutes les fonctionnalitées de l'application"
          }
        />
      </View>
    </View>
  );
}

export default React.memo(FormSignUp2Show);
