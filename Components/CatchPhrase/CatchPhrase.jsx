import React, { memo } from 'react';
import { View, Text } from 'react-native';
import { s } from './CatchPhrase.style';

const CatchPhrase = ({ txtTitle, txtSubtitle, style }) => {
  return (
    <View style={s.container}>
      <Text style={[s.catchTitle, style]}>{txtTitle}</Text>
      <Text style={[s.catchSubtitle, style]}>{txtSubtitle}</Text>
    </View>
  );
};

export default React.memo(CatchPhrase);
