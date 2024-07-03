/**
          --- SplashScreen.jsx ---

  * Description:

    Ce fichier définit le composant d'écran de démarrage (SplashScreen) de l'application. 
    Cet écran est affiché lors du chargement initial de l'application, avant que l'utilisateur n'accède à l'écran principal.

  * Props: 
    Aucune

  * Dependances:
    
    s: definit le style grace au fichier externe qui fait appel au constructeur StyleSheet de React

  * Variables:
    Aucune variable locale

  * Composants:

    ImageBackground: Affiche une image d'arrière-plan pour l'écran de démarrage.
    View: Conteneur principal pour centrer le contenu.
    Image: Affiche le logo de l'application.

  * Fonctions:

    SplashScreen: Fonction principale qui rend l'interface utilisateur de l'écran de démarrage.
    Ici on a pas besoin de memoriser l'export car aucune props change de value.
**/

import React from 'react';
import { View, Image, ImageBackground } from 'react-native';
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
