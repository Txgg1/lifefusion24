/**
          --- Layout.jsx ---

  * Description:

    Ce fichier définit le composant `Layout`, qui enveloppe le contenu de chaque écran avec une mise en page commune,
    y compris une image de fond, une zone sécurisée et un bouton de retour.

  * Props:

    children: Les composants enfants à afficher dans la mise en page.
    backgroundImage: Image de fond optionnelle pour personnaliser chaque écran.

  * Variables:

    navigation: Hook de navigation pour gérer la navigation entre les écrans.
    route: Hook pour obtenir les informations sur la route actuelle.
    Retour: Caractère de retour utilisé pour le bouton de retour.

  * Composants:

    ImageBackground: Composant pour afficher une image de fond.
    SafeAreaView: Composant pour s'assurer que le contenu respecte les zones sécurisées des écrans.
    View: Conteneur principal pour structurer les éléments internes de l'écran.
    TouchableOpacity: Composant cliquable pour gérer les interactions utilisateur.
    Text: Composant affichant le texte du bouton de retour.

  * Fonctions:

    Layout: Fonction principale qui rend (génère) l'interface utilisateur du composant `Layout`.
    handleGoBack: Fonction de gestion de l'événement pour revenir à l'écran précédent.

**/

import React from "react";
import { View, ImageBackground, Text, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { s } from "./Layout.style";

const Layout = ({ children, backgroundImage }) => {
  const navigation = useNavigation();

  const route = useRoute();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const Retour = String.fromCharCode(60);
  return (
    // <ImageBackground source={backgroundImage} style={s.background}> si on veut personnaliser chaque screen
    <ImageBackground
      source={require("../../Assets/Bg1.png")}
      style={s.background}
    >
      <SafeAreaView style={s.safeArea}>
        {route.name !== "First" && (
          <TouchableOpacity onPress={handleGoBack} style={s.backButton}>
            <Text style={s.btnText}>{Retour}</Text>
          </TouchableOpacity>
        )}
        <View style={s.container}>{children}</View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default React.memo(Layout);
