import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({ titleText, results }) => {
  
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.titleStyle}>{titleText}</Text>
      {/* <Text>Results: {results.length}</Text> */}
      <FlatList 
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <ResultsDetail result={item} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    marginBottom: 10,
  },
  titleStyle: {
    marginHorizontal: 15,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  }
});

export default ResultsList;