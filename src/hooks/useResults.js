import { useState, useEffect } from 'react';
import yelp from '../api/yelp';


export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'toronto'
        }
      });
      setResults(response.data.businesses);
      // scenario if the api request fails
    } catch (err) {
      setErrorMessage('Something went wrong!');
    }
  };

  // search API when component renders for the first time
  useEffect(() => {
    searchApi('pasta');
  }, []);

  return [searchApi, results, errorMessage];
};