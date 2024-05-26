import React from "react";
import { View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Subtitle } from "../Subtitle/Subtitle";
import { Title } from "../Title/Title";
import { InputText } from "../InputText/InputText";
import { Button } from "../Button/Button";
import { s } from "./FormSignUp3Data1.style";

export function FormSignUp3Data1() {
  const navigation = useNavigation();
  
  const handleConnexionPress = () => {
    navigation.push("OnBoarding"); // Remplacer 'ConnectScreen' par le nom de votre écran de connexion
  };
  
  const handleInscriptionPress = () => {
    navigation.push("SignUp1"); // Remplacer 'RegisterScreen' par le nom de votre écran d'inscription
  };
  
  return (
    <View View style={s.container}>
    <ScrollView style={s.scrollContainer}>
      <Title style={ s.txtTitle } txtTitle={"Vos données"}/>
        <View style={s.row}>
          <InputText placeholder="Civilité" style={[s.input, s.smallInput]} />
          <Subtitle txtEtape="etape 1 / 2" />
        </View>
        <InputText placeholder="Votre Nom" style={s.input} />
        <InputText placeholder="Votre Prénom" style={s.input} />
        <InputText placeholder="Votre Adresse" style={s.input} />
        <View style={s.row}>
          <InputText placeholder="Code Postal" style={[s.input, s.cp]} />
          <InputText placeholder="Ville" style={[s.input, s.ville]} />
        </View>
        <InputText placeholder="Votre Téléphone" style={[s.input, s.smallInput]} />
        <InputText placeholder="Votre Email" style={s.input} />
        <InputText placeholder="Votre Siret" style={s.input} />
        <InputText placeholder="Banque" style={s.input} />
        <View style={s.row}>
          <InputText placeholder="Votre NSS" style={[s.input, s.halfInput]} />
          <InputText placeholder="Regime" style={[s.input, s.halfInput]} />
        </View>
        <InputText placeholder="Votre Password" style={s.input} />
        <InputText placeholder="Votre Password de verification" style={s.input} />
        <InputText placeholder="Autre 1" style={s.input} />
        <InputText placeholder="Autre 2" style={s.input} />
        <InputText placeholder="Autre 3" style={s.input} />
      </ScrollView>
      <View style={s.buttonContainer}>
       
        <Button
          type="default"
          title="CONNECTION"
          onPress={() => {}}
          style={[s.btnPurple, ]}
          textStyle={s.txtWhite}
        />
        <Button
          type="inscription"
          title="MODIFIER"
          onPress={() => {}}
          style={s.btnWhite}
          textStyle={s.txtPurple}
        />
      </View>
    </View>
  );
}
