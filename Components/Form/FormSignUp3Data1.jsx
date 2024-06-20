import React, { useState, useEffect } from "react";
import { View, ScrollView, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import InputText from "../InputText/InputText";
import Button from "../Button/Button";
import { s } from "./FormSignUp3Data1.style";
import config from "../1rootconfig/ipconfig";
import { connect } from "react-redux";

function FormSignUp3Data1({ user }) {
  const navigation = useNavigation();
  const [civilite, setCivilite] = useState('Monsieur');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVerification, setPasswordVerification] = useState('');

  useEffect(() => {
    if (user) {
      console.log("Utilisateur actuel :", user);
    } else {
      console.error("Utilisateur non trouvé dans le store Redux");
    }
  }, [user]);

  const handleValidationPress = () => {
    if (!civilite || !address || !phoneNumber || !password || !passwordVerification) {
      Alert.alert("Erreur", "Tous les champs obligatoires doivent être remplis");
      return;
    }

    if (password !== passwordVerification) {
      Alert.alert("Erreur", "Les mots de passe ne correspondent pas");
      return;
    }

    const userData = {
      civilite,
      address,
      phoneNumber,
      password,
    };

    if (!user || !user.userId) {
      console.error("ID utilisateur non défini ou invalide :", user);
      Alert.alert("Erreur", "ID utilisateur non défini ou invalide");
      return;
    }

    fetch(`${config}/utilisateurs/${user.userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        Alert.alert("Succès", "Données supplémentaires enregistrées");
        navigation.navigate("SignUp2sShow");
      })
      .catch((error) => {
        console.error("Erreur lors de l'enregistrement des données supplémentaires:", error);
        Alert.alert("Erreur", "Une erreur est survenue lors de l'enregistrement des données supplémentaires");
      });
  };

  return (
    <View style={s.container}>
      <ScrollView style={s.scrollContainer}>
        <View style={s.row}>
          <InputText 
            placeholder="Civilité" 
            style={[s.input, s.smallInput, s.txtInput]} 
            onChangeText={(text) => setCivilite(text)}
            value={civilite}
          />
        </View>
        <InputText 
          placeholder="Votre Adresse" 
          style={[s.input, s.txtInput]} 
          onChangeText={(text) => setAddress(text)}
          value={address}
        />
        <InputText 
          placeholder="Votre Téléphone" 
          style={[s.input, s.smallInput, s.txtInput]} 
          onChangeText={(text) => setPhoneNumber(text)}
          value={phoneNumber}
        />
        <InputText 
          placeholder="Votre Password" 
          style={[s.input, s.txtInput]} 
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
        />
        <InputText 
          placeholder="Votre Password de verification" 
          style={[s.input, s.txtInput]} 
          onChangeText={(text) => setPasswordVerification(text)}
          value={passwordVerification}
          secureTextEntry={true}
        />
      </ScrollView>
      <View style={s.buttonContainer}>
        <Button
          type="default"
          title="Valider"
          onPress={handleValidationPress}
          style={s.btnPurple}
          textStyle={s.txtWhite}
        />
      </View>
    </View>
  );
}

const mapStateToProps = (state) => ({
  user: state.user, // Supposons que l'utilisateur soit stocké sous state.user
});

export default connect(mapStateToProps)(FormSignUp3Data1);
