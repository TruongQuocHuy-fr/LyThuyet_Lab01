import React, { useState, useEffect } from 'react';
import { SafeAreaView, Dimensions, Platform, StyleSheet, View, StatusBar } from 'react-native';
import ButtonRow from './components/ButtonRow';
import ResponsiveImage from './components/ResponsiveImage';
import ResponsiveButtons from './components/ResponsiveButtons';
import InputField from './components/InputField';
import CustomStatusBar from './components/CustomStatusBar';

const App = () => {
  const [orientation, setOrientation] = useState('portrait');

  useEffect(() => {
    const handleOrientationChange = ({ window }) => {
      const { height, width } = window;
      setOrientation(height > width ? 'portrait' : 'landscape');
    };

    const subscription = Dimensions.addEventListener('change', handleOrientationChange);

    // Cleanup event listener when the component unmounts
    return () => {
      subscription?.remove();
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <CustomStatusBar />
      <View style={styles.contentContainer}>
        {/* Responsive Button Layout */}
        
        <ResponsiveButtons />
        {/* Responsive Image */}
        <ResponsiveImage orientation={orientation} />
        {/* Input Field */}
        <InputField />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
