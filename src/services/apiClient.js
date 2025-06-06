import axios from 'axios';

/**
 * Axios instance configured for API requests.
 *
 * @constant
 * @type {AxiosInstance}
 * @property {string} baseURL - The base URL for API requests, taken from environment variable `VITE_API_BASE_URL` or defaults to 'https://app.wewantwaste.co.uk/api'.
 * @property {number} timeout - The request timeout in milliseconds (default: 10000).
 * @property {Object} headers - Default headers for all requests, including 'Content-Type: application/json'.
 *
 * @example
 * import apiClient from './services/apiClient';
 *
 * // GET request example
 * apiClient.get('/users')
 *   .then(response => {
 *     console.log(response.data);
 *   })
 *   .catch(error => {
 *     console.error(error);
 *   });
 */
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://app.wewantwaste.co.uk/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use((config) => {
  return config;
});

export default apiClient;
