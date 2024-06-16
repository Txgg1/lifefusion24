import React from "react";
import { View, Button} from "react-native";
import { Header } from "../../Components/Header/Header";
import { FormSignUp2Hide } from "../../Components/Form/FormSignUp2Hide";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import { s } from './SignUp2HideScreen.style';


export function SignUp2HideScreen() {
  const navigation = useNavigation(); 

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <AntDesign
          name="arrowleft"
          size={24}
          color="black"
          style={{ marginRight: 15, fontWeight: "bold"}} // Style personnalisé pour l'icône de la flèche
          onPress={() => navigation.goBack()} // Naviguez vers l'écran précédent lors du clic
        />
      ),
      headerRight: () => (
        <AntDesign
          name="arrowright"
          size={24}
          color="black"
          style={{ marginRight: 15, fontWeight: "bold"}} // Style personnalisé pour l'icône de la flèche
          onPress={() => navigation.navigate('Connect')} // Naviguez vers l'écran précédent lors du clic
        />
      ),
    });
  }, [navigation]);

  return (
    <View style = { s.wrap }>
      <Header style = { s.txtSubtitle }
      txtTitle="Bienvenue sur LifeFusion" 
      txtSubtitle={"Pour acceder a toutes les foctionnalités," + "\n" + " veuillez creer votre account et reinseigner" + "\n" + " vos données personnelles" }
      />
      <FormSignUp2Hide />
    </View>
  );
}
