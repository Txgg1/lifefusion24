import React from "react";
import { View } from "react-native";
import { Header } from "../../Components/Header/Header";
import { FormOnBoarding } from "../../Components/Form/FormOnBoarding";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import { s } from './OnBoardingScreen.style';


export function OnBoardingScreen() {
  const navigation = useNavigation(); 

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <AntDesign
          name="arrowleft"
          size={36}
          color="#450045"
          style={{ marginRight: 15, fontWeight: "bold"}} // Utiliser fontWeight pour appliquer le style en gras
          onPress={() => navigation.navigate("Logged")} // Naviguer vers l'écran précédent lors du clic
        />
      ),
      headerRight: () => (
        <AntDesign
          name="arrowright"
          size={36}
          color="#450045"
          style={{ marginRight: 15, fontWeight: "bold"}} // Utiliser fontWeight pour appliquer le style en gras
          onPress={() => navigation.navigate("SignUp1")} // Naviguer vers l'écran précédent lors du clic
        />
      ),
    });
  }, [navigation]);

  return (
    <View style = { s.wrap }>
      <Header style = { s.txtSubtitle }
      txtTitle="Bienvenue sur LifeFusion" 
      txtSubtitle={"Partagez vos opportunités immobilières, " + "\n" + "créez des synergies" }
      />
      <FormOnBoarding/>
    </View>
  );
}
