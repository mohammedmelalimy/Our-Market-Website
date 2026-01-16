import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3000/products',
  headers: {
    'Content-Type': 'application/json',
  },
});
export const apiForSpecific = axios.create({
  baseURL: 'http://localhost:3000/products',
  headers: {
    'Content-Type': 'application/json',
  },
});
export const apiCategory = axios.create({
  baseURL: 'http://localhost:3000/products',
  headers: {
    'Content-Type': 'application/json',
  },
});

