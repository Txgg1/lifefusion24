import React from "react";
import { View, Button} from "react-native";
import { Header2 } from "../../Components/Header2/Header2";
import { FormSignUp3Data1 } from "../../Components/Form/FormSignUp3Data1";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import { s } from './SignUp3Data1Screen.style';


export function SignUp3Data1Screen() {
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
    <View style = { s.container }>
      <Header2/>
      <FormSignUp3Data1 />
    </View>
  );
}
