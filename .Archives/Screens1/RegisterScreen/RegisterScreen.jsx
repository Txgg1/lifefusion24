import React from "react";
import { View,} from "react-native";
import { Header } from "../../Components/Header/Header";
import { FormR } from "../../Components/Form/FormR";

export function RegisterScreen() {
  return (
    <View>
      <Header 
      txtTitle="Bienvenue sur LifeFusion" 
      txtSubtitle="Veuillez contacter votre parrain, pour les codes d'inscription"

      />
      <FormR />
    </View>
  );
};
