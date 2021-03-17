import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://rocketshoes-neon.vercel.app/api'
});
