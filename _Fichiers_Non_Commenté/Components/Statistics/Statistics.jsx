import React, { memo } from "react";
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

