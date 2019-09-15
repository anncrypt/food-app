import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({ titleText, results }) => {
  
  return (
    <View>
      <Text style={styles.titleStyle}>{titleText}</Text>
      <Text>Results: {results.length}</Text>
      <FlatList 
        horizontal={true}
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
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default ResultsList;