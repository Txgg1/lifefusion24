/**
          --- FormSignUp2Show.jsx ---

  * Description:

    Ce fichier définit le composant `FormSignUp2Show`, qui affiche des boutons pour l'affiliation et le partage,
    ainsi qu'un titre et un sous-titre confirmant la validation du compte.

  * Props:
    Aucune

  * Variables:

    - navigation: Hook de navigation pour gérer la navigation entre les écrans.
    - handleSharePress: Fonction de gestion de l'événement pour naviguer vers l'écran `Share1`.
    - handleShipPress: Fonction de gestion de l'événement pour naviguer vers l'écran `PartnerShip1`.

  * Composants:

    View: Conteneur principal pour structurer les éléments internes du formulaire.
    BigButton: Boutons pour l'affiliation et le partage.
    Title: Composant affichant le texte du titre.
    Subtitle: Composant affichant le texte du sous-titre.

  * Fonctions:
    
    FormSignUp2Show: Fonction principale qui rend (génère) l'interface utilisateur du composant `FormSignUp2Show`.
    handleSharePress: Fonction de gestion de l'événement pour naviguer vers l'écran `Share1`.
    handleShipPress: Fonction de gestion de l'événement pour naviguer vers l'écran `PartnerShip1`.

**/


import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BigButton from "../Button/BigButton";
import Title from "../Title/Title";
import Subtitle from "../Subtitle/Subtitle";
import { s } from "./FormSignUp2Show.style";

function FormSignUp2Show() {
  const navigation = useNavigation();

  const handleSharePress = () => {
    navigation.push("Share1");
  };

  const handleShipPress = () => {
    navigation.push("PartnerShip1");
  };

  return (
    <View style={s.container}>
      <View style={s.buttons}>
        <BigButton
          type="inscription"
          title="Affiliation"
          onPress={handleShipPress}
        />
        <BigButton
          type="connexion"
          title="Partage"
          onPress={handleSharePress}
        />
      </View>
      <View style={s.footer}>
        <Title style={s.title} txtTitle={"Account valide !"} />
        <Subtitle
          style={s.subtitle}
          txtSubtitle={
            "vous pouvez acceder à toutes les fonctionnalitées de l'application"
          }
        />
      </View>
    </View>
  );
}

export default React.memo(FormSignUp2Show);
