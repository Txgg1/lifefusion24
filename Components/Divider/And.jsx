import React, { memo } from "react";
import { View } from "react-native";
import Title from "../Title/Title";
import Subtitle from "../Subtitle/Subtitle";
import { s } from "./And.style";

function And({ txtTitle, txtSubtitle }) {
  return (
    <View>
      <View style={s.container}>
        <View style={s.divider} />
        <Title txtTitle={txtTitle} style={s.and} />
        <View style={s.divider} />
      </View>
        <Subtitle txtSubtitle={txtSubtitle} style={s.qrCode} />
    </View>
  );
}

export default React.memo(And);
