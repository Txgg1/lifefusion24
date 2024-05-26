import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { s } from "./Button.style";

export function Button({ type, title, onPress}) {
    const buttonstyle = type === 'inscription' ? s.btnWhite : s.btnPurple;
    const textStyle = type === 'inscription' ? s.txtPurple : s.txtWhite;
  return (
    <TouchableOpacity onPress={onPress} style={buttonstyle}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
}
