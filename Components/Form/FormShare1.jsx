/**
          --- FormShare1.jsx ---

  * Description:

    Ce fichier définit le composant `FormShare1`, qui affiche des boutons pour proposer ou rechercher des opportunités
    dans le réseau immobilier, ainsi qu'une phrase d'accroche.

  * Props:
    Aucune

  * Variables:

    - navigation: Hook de navigation pour gérer la navigation entre les écrans.
    - handleOfferPress: Fonction de gestion de l'événement pour naviguer vers l'écran `Share1`.
    - handleSearchPress: Fonction de gestion de l'événement pour naviguer vers l'écran `OnBoarding`.

  * Composants:

    View: Conteneur principal pour structurer les éléments internes du formulaire.
    BigButton: Boutons pour proposer ou rechercher des opportunités.
    CatchPhrase: Composant affichant une phrase d'accroche.

  * Fonctions:

    FormShare1: Fonction principale qui rend (génère) l'interface utilisateur du composant `FormShare1`.
    handleOfferPress: Fonction de gestion de l'événement pour naviguer vers l'écran `Share1`.
    handleSearchPress: Fonction de gestion de l'événement pour naviguer vers l'écran `OnBoarding`.

**/

import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BigButton from "../Button/BigButton";
import CatchPhrase from "../CatchPhrase/CatchPhrase";
import { s } from "./FormShare1.style";

function FormShare1() {
  const navigation = useNavigation();

  const handleOfferPress = () => {
    navigation.push("Share1");
  };

  const handleSearchPress = () => {
    navigation.push("OnBoarding");
  };

  return (
    <View style={s.container}>
      <View style={s.contentAd}>
        <CatchPhrase
          style={[s.catchSubtitle]}
          txtSubtitle={"Je veux elargir" + "\n" + "mon reseau immobilier"}
        />
      </View>
      <View style={s.buttons}>
        <BigButton
          type="connexion"
          title="Je propose"
          onPress={handleOfferPress}
        />
        <BigButton
          type="inscription"
          title="Je recherche"
          onPress={handleSearchPress}
        />
      </View>
    </View>
  );
}

export default React.memo(FormShare1);
