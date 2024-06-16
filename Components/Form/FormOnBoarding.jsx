import React, { useState, memo } from "react";
import { View, Text} from "react-native";
import { useNavigation } from "@react-navigation/native";
// import { Checkbox, Text } from "react-native-paper";
import InputText from "../InputText/InputText";
import Button from "../Button/Button";
import Divider from "../Divider/Divider";
import CatchPhrase from "../CatchPhrase/CatchPhrase";

import { s } from "./FormOnBoarding.style";

  function FormOnBoarding() {

  const navigation = useNavigation();
  // const [rememberMe, setRememberMe] = useState(false);
  // const [checked, setChecked] = React.useState(false);

  const handleInscriptionPress = () => {
    navigation.navigate("SignUp1");
  };

  const handleConnexionPress = () => {
    navigation.navigate("SignUp2aShow"); 
  };

  return (
    <View style={s.container}>
      <View style={s.formAd}>
      <CatchPhrase
            style={[s.catchTitle, s.catchSubtitle]}
            txtTitle="Connectez-vous"
            txtSubtitle="Avec vos identifiants"
          />
      </View>
      <View style={s.formInput}>
        <InputText 
        style={s.email} 
        placeholder={"admin@example.com"} />
        <InputText
          style={s.Pass}
          placeholder={"adminpass"}
          secureTextEntry
        />
      </View>
      <View style={s.formCheckbox}>
        {/* <Checkbox
          status={rememberMe ? "checked" : "unchecked"}
          onPress={() => setRememberMe(!rememberMe)}
          color="#450045"
        /> */}
        <Text style={s.checkboxLabel}>Rester connecté</Text>
      </View>
      <View style={s.formBtn}>
        <Button
          style={s.btn}
          type="connexion"
          title="Se connecter"
          onPress={handleConnexionPress}
        />
      </View>
      <Divider />
      <View style={s.formFooter}>
      <CatchPhrase
            style={[s.catchTitle, s.catchSubtitle]}
            txtSubtitle="Vous avez reçu les codes de connexion ?"
      />
       
        <Button
          style={s.btn}
          type="inscription"
          title="INSCRIVEZ-VOUS"
          onPress={handleInscriptionPress}
        />
      </View>
    </View>
  );
}

export default React.memo(FormOnBoarding);
