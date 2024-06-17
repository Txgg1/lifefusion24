import React, { memo } from 'react';
import { View } from 'react-native';
import { s } from './Divider.style';

const Divider = (style) => {
  return <View style={[s.divider, style]} />;
};

export default React.memo(Divider);
