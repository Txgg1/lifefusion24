import React from "react";
import { View, Text, Button } from "react-native";
import { Header } from "../../Components/Header/Header";
import { FormC } from "../../Components/Form/FormC";


export function ConnectScreen() {
  return (
    <View>
      <Header
      txtTitle="Bienvenue sur LifeFusion" 
      txtSubtitle="Partagez vos opportunités immobilières, créez des synergies" 
      />
      <FormC  />
      </View>
  );
}
