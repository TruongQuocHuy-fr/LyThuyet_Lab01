import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, TextInput, Platform, StyleSheet, Dimensions } from 'react-native';

const InputField = () => {
  const [orientation, setOrientation] = useState('portrait');

  useEffect(() => {
    const handleOrientationChange = ({ window }) => {
      const { height, width } = window;
      setOrientation(height > width ? 'portrait' : 'landscape');
    };

    const subscription = Dimensions.addEventListener('change', handleOrientationChange);

    return () => {
      subscription?.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView
      // Use different behavior based on orientation
      behavior={Platform.OS === 'ios' ? (orientation === 'portrait' ? 'padding' : 'position') : 'height'}
      style={styles.container}
    >
      <TextInput style={styles.input} placeholder="Vui lòng nhập..." />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: '100%',
  },
});

export default InputField;
