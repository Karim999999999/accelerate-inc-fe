import axios from 'axios';
import baseUrl from '../config.js';

export const loginUser = (credentials) =>
  axios
    .request({
      method: 'POST',
      url: `${baseUrl}/login`,
      data: credentials,
    })
    .then(({ data }) => {
      data.token
        ? window.sessionStorage.setItem('token', data.token)
        : window.sessionStorage.removeItem('token');

      return data;
    })
    .catch(console.error);

export const getUserById = (id) =>
  axios
    .request({
      method: 'GET',
      url: `${baseUrl}/users/${id}`,
    })
    .then(({ data }) => data);
