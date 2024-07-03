/**
          --- FormPartnerShip1.jsx ---

  * Description:

    Ce fichier définit le composant `FormPartnerShip1`, qui affiche des boutons carrés pour inviter des partenaires
    via les contacts ou d'autres méthodes comme les réseaux sociaux.

  * Props:
    Aucune

  * Variables:

    - navigation: Hook de navigation pour gérer la navigation entre les écrans.
    - handleInscriptionPress: Fonction de gestion de l'événement pour naviguer vers l'écran `SignUp1`.
    - handleConnexionPress: Fonction de gestion de l'événement pour naviguer vers l'écran `SignUp2Show`.

  * Composants:

    View: Conteneur principal pour structurer les éléments internes du formulaire.
    SquareButton: Boutons carrés pour inviter des partenaires via différentes méthodes.

  * Fonctions:
    
    FormPartnerShip1: Fonction principale qui rend (génère) l'interface utilisateur du composant `FormPartnerShip1`.
    handleInscriptionPress: Fonction de gestion de l'événement pour naviguer vers l'écran `SignUp1`.
    handleConnexionPress: Fonction de gestion de l'événement pour naviguer vers l'écran `SignUp2Show`.

**/

import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SquareButton from "../Button/SquareButton";

import { s } from "./FormPartnerShip1.style";

function FormPartnerShip1() {
  const navigation = useNavigation();

  const handleInscriptionPress = () => {
    navigation.navigate("SignUp1");
  };

  const handleConnexionPress = () => {
    navigation.navigate("SignUp2Show");
  };

  return (
    <View style={s.container}>
      <View style={s.btnContainer}>
        <SquareButton
          type="inscription"
          title="depuis vos contacts"
          onPress={handleConnexionPress}
        />
        <SquareButton
          type="inscription"
          title={"Autres methodes" + "\n" + "Reseaux sociaux"}
          onPress={handleInscriptionPress}
        />
      </View>
    </View>
  );
}

export default React.memo(FormPartnerShip1);
