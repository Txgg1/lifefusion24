import React from "react";
import { View,  } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Subtitle } from "../Subtitle/Subtitle";
import { Title } from "../Title/Title";
import { s } from "./FormPartnerShip1.style";

export function FormPartnerShip1() {
  const navigation = useNavigation();

  const handleConnexionPress = () => {
    navigation.push("OnBoarding"); // Remplacer 'ConnectScreen' par le nom de votre écran de connexion
  };

  const handleInscriptionPress = () => {
    navigation.push("SignUp1"); // Remplacer 'RegisterScreen' par le nom de votre écran d'inscription
  };

  return (
    <View style={s.container}>
      <Title style={s.txtTitle} txtTitle={"Offrez un compte LifeFusion"} />
      <Subtitle
        style={s.txtSubtitle}
        txtSubtitle={
          "Vous avez trouvé un nouveau collaborateur ?  " +
          "Super !" + "\n\n" +
          "Offrez lui un compte exclusif;" + "\n" +
          "en lui permettant de rejoindre " + "\n" +
          "LifeFusion." + "\n\n" +
          "Une application qui remunere" + "\n" +
          " le partenariat!"
        }
      />
    </View>
  );
}
