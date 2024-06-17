import React, { memo } from "react";
import { TextInput } from "react-native";
import { s } from "./InputText.style";

  function InputText({ placeholder, value, onChangeText, secureTextEntry, style }) {
  return (
    <TextInput
      style={[s.txtInput, style]}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      autoCapitalize="none"
    />
  );
}

export  default React.memo(InputText);
