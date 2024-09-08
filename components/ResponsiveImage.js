import React from 'react';
import { Image, Dimensions, StyleSheet, View } from 'react-native';

const ResponsiveImage = ({ orientation }) => {
  const screenWidth = Dimensions.get('window').width;
  const imageWidth = orientation === 'landscape' ? screenWidth * 0.5 : screenWidth * 0.8;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://images2.thanhnien.vn/528068263637045248/2024/1/25/e093e9cfc9027d6a142358d24d2ee350-65a11ac2af785880-17061562929701875684912.jpg' }}
        style={{ width: imageWidth, height: imageWidth * 0.5 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
});

export default ResponsiveImage;
