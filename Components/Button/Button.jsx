import React, { memo } from "react";
import { TouchableOpacity, Text } from "react-native";
import { s } from "./Button.style";

  function Button({ type, title, onPress, style}) {
    const buttonstyle = type === 'inscription' ? style = s.btnWhite : s.btnPurple;
    const textstyle = type === 'inscription' ? s.txtPurple : s.txtWhite;
  return (
    <TouchableOpacity onPress={onPress} style={[buttonstyle, style]}>
      <Text style= {textstyle}>{title}</Text>
    </TouchableOpacity>
  );
}

export default React.memo(Button);
