import React, { memo } from "react";
import { View } from "react-native";
import Identification from "../Identification/Identification";
import Photo from "../Photo/Photo";
import MiniLogo from "../MiniLogo/MiniLogo";
import { s } from "./Header2s.style";

  function Header2s({ txtTitle, txtSubtitle }) {
  return (
    <View style={s.container}>
      <View style={s.identification}>
        <Identification txtTitle={txtTitle} txtSubtitle={txtSubtitle} />
      </View>
      <View style={s.photo}>
        {/* <Photo /> */}
      </View>
      <View style={s.miniLogo}>
        <MiniLogo />
      </View>
    </View>
  );
}

export default React.memo(Header2s);