import React, { useState } from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    // price === '$'|| '$$'|| '$$$'
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar 
        term={term} 
        onTermChange={setTerm} 
        onTermSubmit={searchApi} 
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView> 
        <ResultsList 
          results={filterResultsByPrice('$')} 
          titleText="Cost Effective" 
        />
        <ResultsList 
          results={filterResultsByPrice('$$')} 
          titleText="Bit Pricier" 
        />
        <ResultsList 
          results={filterResultsByPrice('$$$')} 
          titleText="Big Spender!"
        />
      </ScrollView>
    </ >
    );
  }
  
const styles = StyleSheet.create({

});

export default SearchScreen;