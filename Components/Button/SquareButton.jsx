 import React from "react";
 import { TouchableOpacity, Text, View } from "react-native";
 import { s } from "./SquareButton.style";

 export function SquareButton({ type, title, onPress, disabled, style}) {
 const buttonstyle = type === 'inscription' ? s.btnWhite : s.btnPurple;
 const textstyle = type === 'inscription' ? s.txtPurple : s.txtWhite;
return (
 <View style = { s.container }>
<TouchableOpacity disabled={disabled} onPress={onPress} style={buttonstyle}>
<Text style={textstyle}>{title}</Text>
</TouchableOpacity>
 </View>
 );
 }