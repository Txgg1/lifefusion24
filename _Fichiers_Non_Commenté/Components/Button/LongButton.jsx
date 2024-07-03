import React, { memo } from "react";
import { TouchableOpacity, Text } from "react-native";
import { s } from "./LongButton.style";

  function LongButton({ title, onPress, style}) {
    
  return (
    <TouchableOpacity onPress={onPress} style={s.btnWhite}>
      <Text style={s.txtPurple}>{title}</Text>
    </TouchableOpacity>
  );
}

export default React.memo(LongButton);
