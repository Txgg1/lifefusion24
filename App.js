import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { s } from "./App.style";
import { ConnectScreen } from './Screens/ConnectScreen/ConnectScreen.jsx';
import { RegisterScreen } from './Screens/RegisterScreen/RegisterScreen.jsx';





export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Connect' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Connect" component={ConnectScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

