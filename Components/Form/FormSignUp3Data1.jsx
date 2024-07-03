/**
          --- FormSignUp3Data1.jsx ---

  * Description:

    Ce fichier définit le composant `FormSignUp3Data1`, qui affiche un formulaire permettant aux utilisateurs
    de saisir diverses informations personnelles et professionnelles nécessaires à l'inscription.

  * Props:
    Aucune

  * Variables:

    - navigation: Hook de navigation pour gérer la navigation entre les écrans.
    - handleConnexionPress: Fonction de gestion de l'événement pour naviguer vers l'écran `SignUp2sShow`.

  * Composants:

    View: Conteneur principal pour structurer les éléments internes du formulaire.
    ScrollView: Conteneur permettant le défilement du formulaire.
    InputText: Composant de saisie de texte pour les champs du formulaire.
    Button: Bouton pour valider et soumettre le formulaire.

  * Fonctions:

    FormSignUp3Data1: Fonction principale qui rend (génère) l'interface utilisateur du composant `FormSignUp3Data1`.
    handleConnexionPress: Fonction de gestion de l'événement pour naviguer vers l'écran `SignUp2sShow`.

**/

import React from "react";
import { View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import InputText from "../InputText/InputText";
import Button from "../Button/Button";
import { s } from "./FormSignUp3Data1.style";

  function FormSignUp3Data1() {
  const navigation = useNavigation();
  
  const handleConnexionPress = () => {
    navigation.push("SignUp2sShow");
  };
  
  return (
    <View View style={s.container}>
    <ScrollView style={s.scrollContainer}>
        <View style={s.row}>
          <InputText placeholder="Civilité" style={[s.input, s.smallInput, s.txtInput]} />
          </View>
        <InputText placeholder="Votre Nom" style={[s.input, s.txtInput]} />
        <InputText placeholder="Votre Prénom" style={[s.input, s.txtInput]} />
        <InputText placeholder="Votre Adresse" style={[s.input, s.txtInput]} />
        <View style={s.row}>
          <InputText placeholder="Code Postal" style={[s.input, s.cp, s.txtInput]} />
          <InputText placeholder="Ville" style={[s.input, s.ville, s.txtInput]} />
        </View>
        <InputText placeholder="Votre Téléphone" style={[s.input, s.smallInput, s.txtInput]} />
        <InputText placeholder="Votre Email" style={[s.input, s.txtInput]} />
        <InputText placeholder="Votre Siret" style={[s.input, s.txtInput]} />
        <InputText placeholder="Banque" style={[s.input, s.txtInput]} />
        <View style={s.row}>
          <InputText placeholder="Votre NSS" style={[s.input, s.halfInput, s.txtInput]} />
          <InputText placeholder="Regime" style={[s.input, s.halfInput, s.txtInput]} />
        </View>
        <InputText placeholder="Votre Password" style={[s.input, s.txtInput]} />
        <InputText placeholder="Votre Password de verification" style={[s.input, s.txtInput]} />
        <InputText placeholder="Autre 1" style={[s.input, s.txtInput]} />
        <InputText placeholder="Autre 2" style={[s.input, s.txtInput]} />
        <InputText placeholder="Autre 3" style={[s.input, s.txtInput]} />
      </ScrollView>
      <View style={s.buttonContainer}>
       
        <Button
          type="default"
          title="Valider"
          onPress={handleConnexionPress}
          style={s.btnPurple }
          textStyle={s.txtWhite}
        />
      </View>
    </View>
  );
}

export  default React.memo(FormSignUp3Data1);