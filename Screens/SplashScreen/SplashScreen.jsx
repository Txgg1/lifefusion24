import React from 'react';
import { StyleSheet, View, Image, ImageBackground } from 'react-native';
import { s } from './SplashScreen.style';


const SplashScreen = () => {
  return (
    <ImageBackground source={require('../../Assets/Bg1.png')} style={s.background}>
      <View style={s.container}>
        <Image source={require('../../Assets/Splash.png')} style={s.logo} />
      </View>
    </ImageBackground>
  );
};

export default SplashScreen;
