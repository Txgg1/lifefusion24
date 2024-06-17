import React, { useState, memo } from "react";
import { View, Text, Alert} from "react-native";
import { useNavigation } from "@react-navigation/native";
// import { Checkbox, Text } from "react-native-paper";
import InputText from "../InputText/InputText";
import Button from "../Button/Button";
import Divider from "../Divider/Divider";
import CatchPhrase from "../CatchPhrase/CatchPhrase";
import { setUser } from '../../store/reducer/UserReducer'; 
import { connect } from "react-redux";
import config from '../1rootconfig/ipconfig';

import { s } from "./FormOnBoarding.style";

  function FormOnBoarding() {

  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [rememberMe, setRememberMe] = useState(false);
  // const [checked, setChecked] = React.useState(false);

  const handleInscriptionPress = () => {
    navigation.navigate("SignUp1");
  };

  const handleConnexionPress = () => {
    console.log("Email saisi avant fetch :", email);
    console.log("Mot de passe saisi avant fetch :", password);
    fetch(`${config}/utilisateurs`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        }).then(data => {
          const foundUser = data.find(utilisateurs => utilisateurs.email === email && utilisateurs.password === password);
          console.log("email", email);
          console.log("password", password);
          console.log("Utilisateur trouvé :", foundUser);

          if (foundUser) {
              setUser(foundUser); // Met à jour le store Redux avec l'utilisateur trouvé
              navigation.navigate('SignUp2aShow');
          } else {
              Alert.alert('Erreur', 'E-mail ou mot de passe incorrect');
          }
      })
      .catch(error => {
          console.error('Erreur lors de la récupération des utilisateurs:', error);
          Alert.alert('Erreur', 'Une erreur est survenue lors de la connexion');
      });   
      //  navigation.navigate("SignUp2aShow"); 
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
        placeholder={"admin@example.com"} 
        onChangeText={text => setEmail(text)}
        value={email}
        />
        <InputText
          style={s.Pass}
          placeholder={"adminpass"}
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry={true}
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

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user))
});

export default connect(null, mapDispatchToProps)(React.memo(FormOnBoarding));
