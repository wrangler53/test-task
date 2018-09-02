import axios from 'axios';
import config from '../config';

const {
  url,
  apiKey
} = config;

const axiosInstance = axios.create({
  url
})