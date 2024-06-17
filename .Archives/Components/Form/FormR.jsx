import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Title } from "../../../Components/Title/Title";
import { Subtitle } from "../../../Components/Subtitle/Subtitle";
import { InputText } from "../../../Components/InputText/InputText";
import { Button } from "../../../Components/Button/Button";
import { s } from "./FormR.style";

export function FormR() {
  const navigation = useNavigation();

  const handleConnexionPress = () => {
    navigation.push("SignUp2Hide"); // Remplacer 'ConnectScreen' par le nom de votre écran de connexion
  };

  return (
    <View style={s.container}>
      <Title style={s.txtTitle} txtTitle={"Inscription"} />
      <Subtitle
        style={s.txtSubtitle}
        txtSubtitle={"Uniquement sur invitation"}
      />
      <View style={s.wrap}>
        <InputText style={s.txtInput} placeholder={"Votre Nom"} />
        <InputText style={s.txtInput} placeholder={"Code du Parrain"} />
        <InputText style={s.txtInput} placeholder={"Code Inscription"} />
      </View>
      <Button
        type="connexion"
        title="Connexion"
        onPress={handleConnexionPress}
      />
    </View>
  );
}
