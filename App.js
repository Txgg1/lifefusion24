import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, TransitionPresets } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import Store from "./store/configStore.jsx"

/*  - ANCIENS SCREENS -
    import { ConnectScreen } from "./Screens/ConnectScreen/ConnectScreen.jsx";
    import { RegisterScreen } from "./Screens/RegisterScreen/RegisterScreen";
    import { LoggedScreen } from "./Screens/LoggedScreen/LoggedScreen";
*/

import { OnBoardingScreen } from "./Screens/OnBoardingScreen/OnBoardingScreen.jsx";
import { SignUp1Screen } from "./Screens/SignUp1Screen/SignUp1Screen.jsx";
import { SignUp2HideScreen } from "./Screens/SignUp2HideScreen/SignUp2HideScreen.jsx";
import { SignUp2ShowScreen } from "./Screens/SignUp2ShowScreen/SignUp2ShowScreen.jsx";
import { SignUp3Data1Screen } from "./Screens/SignUp3Data1Screen/SignUp3Data1Screen.jsx";
import { PartnerShip1Screen } from "./Screens/PartnerShip1Screen/PartnerShip1Screen.jsx";
import { s } from "./App.style.js";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.container}>
      <Provider store={Store}>
        <NavigationContainer >
          <Stack.Navigator>
            {
              /* - ANCIENS SCREENS -       
                <Stack.Screen name="Connect" component={ConnectScreen} options={{headerShown:false}} /> 
                <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown:false}}/> 
                <Stack.Screen name="Logged" component={LoggedScreen} options={{headerShown:false}}/> 
              */
            }
            <Stack.Screen name="OnBoarding" component={OnBoardingScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SignUp1" component={SignUp1Screen} options={{ headerShown: false }} />
            <Stack.Screen name="SignUp2Hide" component={SignUp2HideScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SignUp2Show" component={SignUp2ShowScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SignUp3Data1" component={SignUp3Data1Screen} options={{ headerShown: false }} />
            <Stack.Screen name="PartnerShip1" component={PartnerShip1Screen} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
        </Provider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}