import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { s } from "./Button.style";

export function Button({ type, title, onPress}) {
    const buttonstyle = type === 'inscription' ? s.btnWhite : s.btnPurple;
    const textstyle = type === 'inscription' ? s.txtPurple : s.txtWhite;
  return (
    <TouchableOpacity onPress={onPress} style={buttonstyle}>
      <Text style={textstyle}>{title}</Text>
    </TouchableOpacity>
  );
}
