import axios from 'axios';

export const getAllUsers = async () => {
  const options = {
    mehtod: 'GET',
    url: '/api/users',
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`,
    },
  };

  const { data } = await axios.request(options);

  return data;
};

export const getUserById = async (id) => {
  const options = {
    method: 'GET',
    url: `/users/${id}`,
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
    url: '/api/users',
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
    url: `/api/${id}`,
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
    url: `/api/users/${id}`,
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`,
    },
  };

  const { data } = await axios.request(options);
  return data;
};
