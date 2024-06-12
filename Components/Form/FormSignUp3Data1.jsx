import React, { useState } from "react";
import { View, ScrollView, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Subtitle } from "../Subtitle/Subtitle";
import { Title } from "../Title/Title";
import { InputText } from "../InputText/InputText";
import { Button } from "../Button/Button";
import { s } from "./FormSignUp3Data1.style";
import { connect } from "react-redux";
import config from '../1rootconfig/ipconfig'; // Assurez-vous que ce chemin est correct

function FormSignUp3Data1({ user }) {
  const navigation = useNavigation();

  const [civilite, setCivilite] = useState(user.civilite || 'Monsieur');
  const [username, setUsername] = useState(user.username || '');
  const [address, setAddress] = useState(user.address || '');
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber || '');
  const [email, setEmail] = useState(user.email || '');
  const [password, setPassword] = useState('');
  const [passwordVerification, setPasswordVerification] = useState('');

  const handleConnexionPress = () => {
    navigation.push("OnBoarding");
  };

  const handleInscriptionPress = () => {
    navigation.push("SignUp1");
  };

  const handleModifierPress = () => {
    if (!password || !passwordVerification) {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs de mot de passe');
      return;
    }

    if (password !== passwordVerification) {
      Alert.alert('Erreur', 'Les mots de passe ne correspondent pas');
      return;
    }

    console.log("Vérification du mot de passe en cours...");

    fetch(`${config}/verify-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: user.email, password })
    })
    .then(response => {
      console.log("Réponse de vérification du mot de passe reçue :", response);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
      console.log("Résultat de la vérification du mot de passe :", data);
      if (data.valid) {
        const userData = {
          civilite,
          username,
          address,
          phoneNumber,
          email,
          password,
        };

        console.log("Données utilisateur à envoyer :", userData);
        console.log("ID de l'utilisateur :", user.userId);

        if (user.userId === undefined) {
          Alert.alert('Erreur', 'ID de l\'utilisateur non défini');
          return;
        }

        fetch(`${config}/utilisateurs/${user.userId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
        })
        .then(response => {
          console.log("Réponse de mise à jour des données reçue :", response);
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then(data => {
          console.log("Données mises à jour reçues :", data);
          Alert.alert('Succès', 'Vos données ont été mises à jour');
          setCivilite(data.civilite);
          setUsername(data.username);
          setAddress(data.address);
          setPhoneNumber(data.phoneNumber);
          setEmail(data.email);
          setPassword('');
          setPasswordVerification('');
        })
        .catch(error => {
          console.error('Erreur lors de la mise à jour des données:', error);
          Alert.alert('Erreur', 'Une erreur est survenue lors de la mise à jour des données');
        });
      } else {
        Alert.alert('Erreur', 'Le mot de passe est incorrect');
      }
    })
    .catch(error => {
      console.error('Erreur lors de la vérification du mot de passe:', error);
      Alert.alert('Erreur', 'Une erreur est survenue lors de la vérification du mot de passe');
    });
  };

  return (
    <View style={s.container}>
      <ScrollView style={s.scrollContainer}>
        <Title style={s.txtTitle} txtTitle={"Vos données"} />
        <View style={s.row}>
          <InputText placeholder="Civilité (Monsieur/Madame)" style={[s.input, s.smallInput]} value={civilite} onChangeText={setCivilite} />
          <Subtitle txtEtape="etape 1 / 2" />
        </View>
        <InputText placeholder="Votre Nom et Prénom" style={s.input} value={username} onChangeText={setUsername} />
        <InputText placeholder="Votre Adresse" style={s.input} value={address} onChangeText={setAddress} />
        <InputText placeholder="Votre Téléphone" style={[s.input, s.smallInput]} value={phoneNumber} onChangeText={setPhoneNumber} />
        <InputText placeholder="Votre Email" style={s.input} value={email} onChangeText={setEmail} />
        <InputText placeholder="Votre Password" style={s.input} value={password} onChangeText={setPassword} secureTextEntry={true} />
        <InputText placeholder="Votre Password de verification" style={s.input} value={passwordVerification} onChangeText={setPasswordVerification} secureTextEntry={true} />
      </ScrollView>
      <View style={s.buttonContainer}>
        <Button
          type="default"
          title="CONNEXION"
          onPress={handleConnexionPress}
          style={[s.btnPurple]}
          textStyle={s.txtWhite}
        />
        <Button
          type="inscription"
          title="MODIFIER"
          onPress={handleModifierPress}
          style={s.btnWhite}
          textStyle={s.txtPurple}
        />
      </View>
    </View>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(FormSignUp3Data1);
