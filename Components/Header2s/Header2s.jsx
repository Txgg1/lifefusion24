/**
          --- Header2s.jsx --- (sans photo - avatar) 

  * Description:

    Ce fichier définit le composant `Header2s`, qui affiche une section d'en-tête avec une identification, 
    une photo et un mini-logo.

  * Props:
    - txtTitle: Texte du titre à afficher dans l'identification.
    - txtSubtitle: Texte du sous-titre à afficher dans l'identification.

  * Variables:
    Aucune

  * Composants:
    View: Conteneur principal pour structurer les éléments internes de l'en-tête.
    Identification: Composant affichant le titre et le sous-titre pour identifier une entité ou une statistique spécifique.
    Photo: Composant affichant une photo (commenté ici pour tester l'import via la caméra).
    MiniLogo: Composant affichant un mini-logo.

  * Fonctions:
    Header2s: Fonction principale qui rend (génère) l'interface utilisateur du composant `Header2s`.

**/

import React from "react";
import { View } from "react-native";
import Identification from "../Identification/Identification";
import Photo from "../Photo/Photo";
import MiniLogo from "../MiniLogo/MiniLogo";
import { s } from "./Header2s.style";

  function Header2s({ txtTitle, txtSubtitle }) {
  return (
    <View style={s.container}>
      <View style={s.identification}>
        <Identification txtTitle={txtTitle} txtSubtitle={txtSubtitle} />
      </View>
      <View style={s.photo}>
        {/* <Photo /> */} {/* Ici on commente le composant photo afin de tester l'import via la camera */}
      </View>
      <View style={s.miniLogo}>
        <MiniLogo />
      </View>
    </View>
  );
}

export default React.memo(Header2s);