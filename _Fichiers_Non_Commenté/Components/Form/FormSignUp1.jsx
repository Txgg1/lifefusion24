import React, { memo } from "react";
import { View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import InputText  from "../InputText/InputText";
import Button  from "../Button/Button";
import { s } from "./FormSignUp1.style";

function FormSignUp1() {
  const navigation = useNavigation();

  const handleConnexionPress = () => {
    navigation.navigate("SignUp2Hide");
  };

  return (

    <View style={s.container}>
      <View style={s.formInput}>
        <InputText style={s.txtInput} placeholder="Votre Nom" />
        <InputText style={s.txtInput} placeholder="Code du Parrain" />
        <InputText style={s.txtInput} placeholder="Code Inscription" />
      </View>
      <View style={s.formButtons}>
      <Button type="connexion" title="Inscrivez-vous ici" onPress={handleConnexionPress}/>
      </View>
    </View>
  );
}

export default React.memo(FormSignUp1);
