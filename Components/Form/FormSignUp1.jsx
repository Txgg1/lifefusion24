import React, { memo, useState } from "react";
import { View, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';
import InputText from "../InputText/InputText";
import Button from "../Button/Button";
import { s } from "./FormSignUp1.style";
import config from "../1rootconfig/ipconfig";
import { setUser } from "../../store/reducer/UserReducer";
import { connect } from "react-redux";

function FormSignUp1({ setUser }) {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleConnexionPress = () => {
    if (!username || !email || !password || !confirmPassword) {
      Alert.alert("Erreur", "Tous les champs doivent être remplis");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Erreur", "Les mots de passe ne correspondent pas");
      return;
    }

    // Données à envoyer à l'API
    const userData = {
      username,
      email,
      password,
    };

    // Requête pour envoyer les données à l'API
    fetch(`${config}/utilisateurs`, {
      method: "POST",
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
        Alert.alert("Succès", "Inscription réussie");
        setUser(data); // Met à jour le store Redux avec l'utilisateur enregistré
        navigation.navigate("SignUp2Hide");
      })
      .catch((error) => {
        console.error("Erreur lors de l'inscription:", error);
        Alert.alert("Erreur", "Une erreur est survenue lors de l'inscription");
      });
  };

  return (
    <View style={s.container}>
      <View style={s.formInput}>
        <InputText 
          style={s.txtInput} 
          placeholder="Votre Nom" 
          onChangeText={(text) => setUsername(text)}
          value={username}
        />
        <InputText 
          style={s.txtInput} 
          placeholder="Mail" 
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <InputText 
          style={s.txtInput} 
          placeholder="Mot de passe" 
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
        />
        <InputText 
          style={s.txtInput} 
          placeholder="Confirmer le mot de passe" 
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirmPassword}
          secureTextEntry={true}
        />
      </View>
      <View style={s.formButtons}>
        <Button 
          type="connexion" 
          title="Inscrivez-vous ici" 
          onPress={handleConnexionPress}
        />
      </View>
    </View>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user)),
});

export default connect(null, mapDispatchToProps)(React.memo(FormSignUp1));
