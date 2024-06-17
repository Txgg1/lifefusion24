import React from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TestIconComponent() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Testing Icon</Text>
      <MaterialIcons name="home" size={50} color="#450045" />
    </View>
  );
}