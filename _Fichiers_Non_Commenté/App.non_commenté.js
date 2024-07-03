import 'react-native-gesture-handler';
import 'react-native-reanimated';

import React, { useState, useEffect, memo } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TransitionPresets } from '@react-navigation/stack';
import { SafeAreaProvider } from "react-native-safe-area-context";
import SplashScreen from "../Screens/SplashScreen/SplashScreen";
import FirstScreen from "../Screens/FirstScreen/FirstScreen";
import OnBoardingScreen from "../Screens/OnBoardingScreen/OnBoardingScreen";
import SignUp2aShowScreen from "../Screens/SignUp2aShowScreen/SignUp2aShowScreen";
import SignUp2sShowScreen from "../Screens/SignUp2sShowScreen/SignUp2sShowScreen";
import SignUp1Screen from "../Screens/SignUp1Screen/SignUp1Screen";
import SignUp2HideScreen from "../Screens/SignUp2HideScreen/SignUp2HideScreen";
import SignUp3Data1Screen from "../Screens/SignUp3Data1Screen/SignUp3Data1Screen";
import PartnerShip1Screen from "../Screens/PartnerShip1Screen/PartnerShip1Screen";
import Share1Screen from "../Screens/Share1Screen/Share1Screen";


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
        <Stack.Navigator
          initialRouteName="First"
          screenOptions={{
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

export default memo(App);