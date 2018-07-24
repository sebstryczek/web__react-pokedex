import axios from 'axios';
import asyncWrapper from '../utils/asyncWrapper';

const baseUrl = 'https://pokeapi.co/api/v2';

export const listTypes = async () => {
  const res = await asyncWrapper( axios.get(`${baseUrl}/type`) );

  if (res.error) {
    console.error(res.error);
    return [];
  }
  
  return res.data.results;
}
