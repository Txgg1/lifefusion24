/**
          --- FormSignUp1.jsx ---

  * Description:

    Ce fichier définit le composant `FormSignUp1`, qui affiche un formulaire permettant aux utilisateurs
    de saisir leur nom, le code du parrain et le code d'inscription, avec un bouton pour valider la préinscription.

  * Props:
    Aucune

  * Variables:

    - navigation: Hook de navigation pour gérer la navigation entre les écrans.
    - handleConnexionPress: Fonction de gestion de l'événement pour naviguer vers l'écran `SignUp2Hide`.

  * Composants:

    View: Conteneur principal pour structurer les éléments internes du formulaire.
    InputText: Composant de saisie de texte pour les champs du formulaire.
    Button: Bouton pour valider et soumettre le formulaire.

  * Fonctions:

    FormSignUp1: Fonction principale qui rend (génère) l'interface utilisateur du composant `FormSignUp1`.
    handleConnexionPress: Fonction de gestion de l'événement pour naviguer vers l'écran `SignUp2Hide`.

**/

import React from "react";
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
