import React from "react";
import { View, Button} from "react-native";
import { Header } from "../../Components/Header/Header";
import { FormR } from "../../Components/Form/FormR";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import { s } from './RegisterScreen.style';

export function RegisterScreen() {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <AntDesign
          name="arrowleft"
          size={36}
          color="#450045"
          style={{ marginLeft: 15, fontWeight: "bold" }} // Style personnalisé pour l'icône de la flèche
          onPress={() => navigation.goBack()} // Naviguez vers l'écran précédent lors du clic
        />
      ),
      headerRight: () => (
        <AntDesign
          name="arrowright"
          size={36}
          color="#450045"
          style={{ marginRight: 15, fontWeight: "bold" }} // Style personnalisé pour l'icône de la flèche
          onPress={() => navigation.navigate("Logged")} // Naviguez vers l'écran précédent lors du clic
        />
      ),
    });
  }, [navigation]);

  return (
    <View style = { s.wrap }>
      <Header
      txtTitle="Bienvenue sur LifeFusion" 
      txtSubtitle={"Veuillez contacter votre parrain,  " + "\n" + " pour les codes d'inscription"}
      style = {s.subtitle}
      />
      <FormR />
    </View>
  );
};
