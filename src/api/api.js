import axios from 'axios';
import config from '../config';

const {
  baseUrl,
  apiKey
} = config;

const axiosInstance = axios.create({
  baseUrl
});

export const getTenLastNews = async () => {
  const url = `${baseUrl}/search?api-key=${apiKey}`;
  const response = await axiosInstance.get(url);
  return response.data.response.results;
};