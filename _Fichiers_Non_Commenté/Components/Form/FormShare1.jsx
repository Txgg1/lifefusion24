import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BigButton from "../Button/BigButton";
import CatchPhrase from "../CatchPhrase/CatchPhrase";
import { s } from "./FormShare1.style";

function FormShare1() {
  const navigation = useNavigation();

  const handleOfferPress = () => {
    navigation.push("Share1"); // Remplacer 'RegisterScreen' par le nom de votre écran d'inscription
  };

  const handleSearchPress = () => {
    navigation.push("OnBoarding"); // Remplacer 'RegisterScreen' par le nom de votre écran d'inscription
  };

  return (
    <View style={s.container}>
      <View style={s.contentAd}>
        <CatchPhrase
          style={[s.catchSubtitle]}
          txtSubtitle={"Je veux elargir" + "\n" + "mon reseau immobilier"}
        />
      </View>
      <View style={s.buttons}>
        <BigButton
          type="connexion"
          title="Je propose"
          onPress={handleOfferPress}
        />
        <BigButton
          type="inscription"
          title="Je recherche"
          onPress={handleSearchPress}
        />
      </View>
    </View>
  );
}

export default React.memo(FormShare1);
