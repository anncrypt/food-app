import React, {useState, useEffect} from 'react';
import { Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id');

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <>
      <Text style={styles.nameStyle}>{result.name}</Text>
      <FlatList 
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return (
            <Image 
              style={styles.imageStyle}
              source={{ uri: item }}
            />
          );
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    height: 200,
    width: 300,
    borderRadius: 4,
    marginBottom: 7,
    marginLeft: 15
  },
  nameStyle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 10,
    marginLeft: 15
  }
});

export default ResultsShowScreen;