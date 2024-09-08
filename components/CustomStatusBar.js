import React from 'react';
import { StatusBar, Platform } from 'react-native';

const CustomStatusBar = () => {
  return (
    <StatusBar
      barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
      backgroundColor={Platform.OS === 'android' ? '#ff6347' : 'transparent'}
    />
  );
};

export default CustomStatusBar;
