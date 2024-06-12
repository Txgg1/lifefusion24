import React from "react";
import { View, } from "react-native";
import { Title } from "../Title/Title";
import Identification from "../Identification/Identification";
import { Photo } from "../Photo/Photo";
import { MiniLogo } from "../MiniLogo/MiniLogo";
import { s } from "./Header2.style";

export function Header2({ txtTitle, txtSubtitle, style }) {
  return (
  
    <View style={s.container}>    
      <View style={s.identification}>
        <Identification title={txtTitle} subtitle={txtSubtitle} />
      </View>
      <View style={s.photo}>
        <Photo />
      </View>
      <View style={s.miniLogo}>
        <MiniLogo />
      </View>
    </View>
    
  );
}
