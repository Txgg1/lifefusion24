/**
          --- Statistics.jsx ---

  * Description:

    Ce fichier définit le composant `Statistics`, qui affiche des informations statistiques sur le nombre de filleuls,
    l'agence et le nombre de biens.

  * Props:
    Aucune

  * Variables:
    Aucune

  * Composants:

    View: Conteneur principal pour structurer les éléments statistiques.
    Identification: Composant affichant le titre et le sous-titre des informations statistiques.

  * Fonctions:
    
    Statistics: Fonction principale qui rend (génère) l'interface utilisateur du composant `Statistics`.

**/


import React from "react";
import { View } from "react-native";
import Identification from "../Identification/Identification";
import { s } from "./Statistics.style";

  function Statistics() {
  return (
    <View style={s.container}>
      <View style={s.item}>
        <Identification txtTitle="Nb. de filleuls:" txtSubtitle="150" />
      </View>
      <View style={s.item}>
        <Identification txtTitle="Agence:" txtSubtitle="LifeImmo" />
      </View>
      <View style={s.item}>
        <Identification txtTitle="Nb. de Biens:" txtSubtitle="50" />
      </View>
    </View>
  );
}

export default React.memo(Statistics);

