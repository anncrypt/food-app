import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const ResultsDetail = ({ result }) => {

  return (
    <View style={styles.containerStyle}>
      <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
      <Text>{result.name}</Text>
      <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    marginHorizontal: 15,
  },
  imageStyle: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5
  },
  nameStyle: {
    fontWeight: 'bold',
  }
});

export default ResultsDetail;