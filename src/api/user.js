import axios from 'axios';
import baseUrl from '../config';

export const getAllUsers = async (id) => {
  const options = {
    mehtod: 'GET',
    url: `${baseUrl}/users/${id}`,
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`,
    },
  };
  const { data } = await axios.request(options);

  return data;
};

export const createUser = async () => {
  const options = {
    method: 'POST',
    url: `${baseUrl}/user`,
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`,
    },
  };

  const { data } = await axios.request(options);

  return data;
};

export const updateUser = async (id) => {
  const options = {
    method: 'PUT',
    url: `${baseUrl}/${id}`,
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`,
    },
  };

  const { data } = await axios.request(options);

  return data;
};

export const deleteUser = async (id) => {
  const options = {
    method: 'DELETE',
    url: `${baseUrl}/users/${id}`,
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`,
    },
  };

  const { data } = await axios.request(options);
  return data;
};
