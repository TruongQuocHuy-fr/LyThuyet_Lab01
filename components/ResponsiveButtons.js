import React, { useState, useEffect } from 'react';
import { View, Button, Dimensions, StyleSheet, TouchableOpacity, Text } from 'react-native';

const ResponsiveButtons = () => {
  const [orientation, setOrientation] = useState(getOrientation());

  function getOrientation() {
    const { height, width } = Dimensions.get('window');
    return height > width ? 'portrait' : 'landscape';
  }

  useEffect(() => {
    const handleOrientationChange = () => {
      const { height, width } = Dimensions.get('window');
      const newOrientation = height > width ? 'portrait' : 'landscape';
      console.log(`Orientation changed to: ${newOrientation}`);
      setOrientation(newOrientation);
    };

     // Thêm event listener để phát hiện thay đổi hướng màn hình
    const subscription = Dimensions.addEventListener('change', handleOrientationChange);

      // Cleanup: Gỡ bỏ event listener khi component unmounts
    return () => {
      subscription?.remove();
    };
  }, []);

  const handleButtonPress = (buttonNumber) => {
    console.log(`Button ${buttonNumber} pressed`);
  };

  return (
    <View style={orientation === 'portrait' ? styles.portrait : styles.landscape}>
      <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(1)}>
        <Text style={styles.buttonText}>Button 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(2)}>
        <Text style={styles.buttonText}>Button 2</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  portrait: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  landscape: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 10,
    marginHorizontal: 5,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ResponsiveButtons;
