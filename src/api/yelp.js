import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer HprXEN1PywbOnYrgjrAghROYfvDb2hC0MNz4D0OnpJ8rEywgsdgXNY3bnm4JHQIDUZPOEYzFXDU1Z6GjSwfBIYVBNSqU2hyTlkVUTAljlh86_G5SyVCuoKak-mF5XXYx'
  }
});
