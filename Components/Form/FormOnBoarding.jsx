/**
          --- FormOnBoarding.jsx ---

  * Description:

    Ce fichier définit le composant `FormOnBoarding`, qui affiche un formulaire permettant aux utilisateurs
    de se connecter ou de s'inscrire avec leurs identifiants, incluant des champs de saisie pour l'email et le mot de passe,
    ainsi que des boutons de connexion et d'inscription.

  * Props:
    Aucune

  * Variables:

    - navigation: Hook de navigation pour gérer la navigation entre les écrans.
    - handleInscriptionPress: Fonction de gestion de l'événement pour naviguer vers l'écran `SignUp1`.
    - handleConnexionPress: Fonction de gestion de l'événement pour naviguer vers l'écran `SignUp2aShow`.

  * Composants:

    View: Conteneur principal pour structurer les éléments internes du formulaire.
    InputText: Composant de saisie de texte pour les champs email et mot de passe.
    Button: Boutons pour valider la connexion et l'inscription.
    Divider: Composant pour séparer visuellement les sections du formulaire.
    CatchPhrase: Composant affichant des phrases d'accroche.
    Text: Composant affichant du texte, utilisé ici pour le label de la case à cocher (actuellement commentée).

  * Fonctions:

    FormOnBoarding: Fonction principale qui rend (génère) l'interface utilisateur du composant `FormOnBoarding`.
    handleInscriptionPress: Fonction de gestion de l'événement pour naviguer vers l'écran `SignUp1`.
    handleConnexionPress: Fonction de gestion de l'événement pour naviguer vers l'écran `SignUp2aShow`.

  * TODO:

    Implémenter la case à cocher utilisant la bibliothèque `react-native-paper` lorsque le problème de chargement sera résolu.

**/

import React, { useState } from "react";
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
