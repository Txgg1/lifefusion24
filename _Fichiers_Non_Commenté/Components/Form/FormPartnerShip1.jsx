import React, { memo } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Title from "../Title/Title";
import Subtitle from "../Subtitle/Subtitle";
import SquareButton from "../Button/SquareButton";

import { s } from "./FormPartnerShip1.style";

function FormPartnerShip1() {
  const navigation = useNavigation();

  const handleInscriptionPress = () => {
    navigation.navigate("SignUp1");
  };

  const handleConnexionPress = () => {
    navigation.navigate("SignUp2Show"); // Remplacer 'ConnectScreen' par le nom de votre écran de connexion
  };

  return (
    <View style={s.container}>
      <View style={s.btnContainer}>
        <SquareButton
          type="inscription"
          title="depuis vos contacts"
          onPress={handleConnexionPress}
        />
        <SquareButton
          type="inscription"
          title={"Autres methodes" + "\n" + "Reseaux sociaux"}
          onPress={handleInscriptionPress}
        />
      </View>
    </View>
  );
}

export default React.memo(FormPartnerShip1);
