import { GiphyFetch } from '@giphy/js-fetch-api';
import { API_KEY } from '../config/api-key.json';

export const Giphy = new GiphyFetch(API_KEY);
