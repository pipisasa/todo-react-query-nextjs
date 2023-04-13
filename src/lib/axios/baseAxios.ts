import axios from 'axios';
import { API_URL } from '~/utils/constants';

export const baseAxios = axios.create({
  baseURL: API_URL
});