import React, { memo } from "react";
import { View, ImageBackground, Text, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { s } from "./Layout.style"; // Assurez-vous que le chemin est correct

const Layout = ({ children, backgroundImage }) => {
  const navigation = useNavigation();

  const route = useRoute();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const Retour = String.fromCharCode(60);
  return (
    // <ImageBackground source={backgroundImage} style={s.background}>
    <ImageBackground
      source={require("../../Assets/Bg1.png")}
      style={s.background}
    >
      <SafeAreaView style={s.safeArea}>
        {route.name !== "First" && (
          <TouchableOpacity onPress={handleGoBack} style={s.backButton}>
            <Text style={s.btnText}>{Retour}</Text>
          </TouchableOpacity>
        )}
        <View style={s.container}>{children}</View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default React.memo(Layout);
