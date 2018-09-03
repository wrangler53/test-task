import axios from 'axios';
import config from '../config';

const {
  baseUrl,
  apiKey
} = config;

const axiosInstance = axios.create({
  baseUrl
});

export const getNews = async (page) => {
  const url = `${baseUrl}/search?page=${page}&api-key=${apiKey}`;
  const response = await axiosInstance.get(url);
  return response.data.response;
};

export const getNewsItemBody = async (apiUrl) => {
  const url = `${apiUrl}?show-fields=trailText&api-key=${apiKey}`;
  const response = await axiosInstance.get(url);
  return response.data.response.content.fields.trailText;
};