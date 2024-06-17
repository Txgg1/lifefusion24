import React, { memo } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { s } from "./BigButton.style";

function BigButton({ type, title, onPress, disabled, style}) {
    const buttonstyle = [
      type === 'inscription' ? s.btnWhite : s.btnPurple,
      disabled && s.disabledButton, // Applique le style de désactivation si le bouton est désactivé
  ];
    const textstyle = type === 'inscription' ? s.txtPurple : s.txtWhite;
  return (
    <View style = { [s.container, style] }>
    <TouchableOpacity  disabled={disabled} onPress={onPress} style={buttonstyle}>
      <Text style={textstyle}>{title}</Text>
    </TouchableOpacity>
    </View>
  );
}

export default React.memo(BigButton);
