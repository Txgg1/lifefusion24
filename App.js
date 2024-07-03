/**
         --- App.jsx ---
 
  Dans le cadre du projet de fin d'etudes du diplome:
         
  -- Licence Professionnelle Developpeur D'applications Orienté Objet --
         
  * Description de l'application:

    Nom: LifeFusion

    Application Android réalisée en React Native Expo 
    permettant le partenariat entre agences immobilières
    et le partage des annonces des biens.

    Cette application permet aux agents immobiliers de collaborer entre eux,
    de partager des annonces et de gérer des notifications, 
    tout en garantissant un accès structuré à une base de données globale.
 
  * Auteurs:

    Sitki : Partie Conception BDD - Developpement Api Java ( SpringBoot ) - Gestion Back-End, Front-End et BDD ( JAVA - React Native Expo et PhpMyAdmin )
    Arno : Partie Gestion Projet KANBAN ( Trello ) Conception du Design ( Figma ), Prototypage, Logos, Icones ( Illustrator, Figma ), et Front-End ( React Native Expo )

  * Mandataire:

    Agence: LifeImmo
    Tuteur du stage: Stephane Romeo - Président de la societé immobiliaire LifeImmo
    Superviseur du projet: Patricia Pfleger
 
  * Variables:

    Stack: Crée une pile de navigation pour gérer les transitions d'écran dans l'application.
    UseState (isLoading) : État boolean pour gérer l'affichage de l'écran de chargement.

 
  * Composants et Écrans:

    SplashScreen: Écran de chargement initial affiché pendant 3sec lors du chargement des ressources .
    FirstScreen: Écran de bienvenue ou d'introduction qui présente les fonctionnalités de base de l'application.
    OnBoardingScreen: Écran de présentation détaillée des fonctionnalités de l'application et de l'inscription des utilisateurs.
    SignUp2aShowScreen: Écran de la première étape d'inscription (partie A).
    SignUp2sShowScreen: Écran de la première étape d'inscription (partie S).
    SignUp1Screen: Écran de la deuxième étape d'inscription.
    SignUp2HideScreen: Écran de préinscription les boutons principaux sont cachés tant que la la deuxième étape d'inscription soit terminé.
    SignUp3Data1Screen: Écran de la troisième étape d'inscription.
    PartnerShip1Screen: Écran dédié à la gestion des partenariats entre les agences immobilières.
    Share1Screen: Écran de partage des annonces.
 
  * Fonctions:
    
    useEffect: Hook utilisé pour démarrer un timer de 3 secondes qui change l'état `isLoading` à `false`, simulant un chargement initial.
   
    App:  Fonction principale qui initialise et configure la navigation de l'application.
    Elle utilise le composant `NavigationContainer` pour englober la navigation de l'application
    et le composant `Stack.Navigator` pour définir les différents écrans de l'application.
    elle gère également l'affichage de l'écran de chargement initial: splashScreen.

    memo: `React.memo` est utilisé pour mémoriser le composant `App`, évitant les re-rendus inutiles et optimisant ainsi les performances.
  *
 **/


import 'react-native-gesture-handler';
import 'react-native-reanimated';
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TransitionPresets } from '@react-navigation/stack';
import { SafeAreaProvider } from "react-native-safe-area-context";
import SplashScreen from "./Screens/SplashScreen/SplashScreen";
import FirstScreen from "./Screens/FirstScreen/FirstScreen";
import OnBoardingScreen from "./Screens/OnBoardingScreen/OnBoardingScreen";
import SignUp2aShowScreen from "./Screens/SignUp2aShowScreen/SignUp2aShowScreen";
import SignUp2sShowScreen from "./Screens/SignUp2sShowScreen/SignUp2sShowScreen";
import SignUp1Screen from "./Screens/SignUp1Screen/SignUp1Screen";
import SignUp2HideScreen from "./Screens/SignUp2HideScreen/SignUp2HideScreen";
import SignUp3Data1Screen from "./Screens/SignUp3Data1Screen/SignUp3Data1Screen";
import PartnerShip1Screen from "./Screens/PartnerShip1Screen/PartnerShip1Screen";
import Share1Screen from "./Screens/Share1Screen/Share1Screen";

const Stack = createNativeStackNavigator();

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>

        <Stack.Navigator initialRouteName="First" screenOptions={{
          gestureEnabled: true,
          ...TransitionPresets.SlideFromRightIOS,
          gestureDirection: 'horizontal',
        }}>

          <Stack.Screen name="First" component={FirstScreen} options={{ headerShown: false }} />
          <Stack.Screen name="OnBoarding" component={OnBoardingScreen} options={{ headerShown: false }} />
          <Stack.Screen name="SignUp2aShow" component={SignUp2aShowScreen} options={{ headerShown: false }} />
          <Stack.Screen name="SignUp2sShow" component={SignUp2sShowScreen} options={{ headerShown: false }} />
          <Stack.Screen name="SignUp1" component={SignUp1Screen} options={{ headerShown: false }} />
          <Stack.Screen name="SignUp2Hide" component={SignUp2HideScreen} options={{ headerShown: false }} />
          <Stack.Screen name="SignUp3Data1" component={SignUp3Data1Screen} options={{ headerShown: false }} />
          <Stack.Screen name="PartnerShip1" component={PartnerShip1Screen} options={{ headerShown: false }} />
          <Stack.Screen name="Share1" component={Share1Screen} options={{ headerShown: false }} />

        </Stack.Navigator>

      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default React.memo(App); 

                                
