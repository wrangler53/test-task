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

export const getNewsItemBody = async (apiUrl) => {
  const url = `${apiUrl}?show-fields=trailText&api-key=${apiKey}`;
  const response = await axiosInstance.get(url);
  return response.data.response.content.fields.trailText;
};