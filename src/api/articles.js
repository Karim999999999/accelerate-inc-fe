import axios from 'axios';
import baseUrl from '../config.js';
const getAllArticles = () =>
  axios.request({
    method: 'GET',
    url: `${baseUrl}/articles`,
  });

const getArticlesByCategory = (category) =>
  axios
    .request({
      method: 'GET',
      url: `${baseUrl}/articles`,
      params: { 'categories[in]': category },
    })
    .then(({ data }) => data.data);

const getAllArticlesByStatus = (status) =>
  axios
    .request({
      method: 'GET',
      url: `${baseUrl}/articles`,
      params: { status },
    })
    .then((data) => data.data);

const getArticleById = (id) =>
  axios
    .request({
      method: 'GET',
      url: `${baseUrl}/articles/${id}`,
    })
    .then(({ data }) => data);

export {
  getAllArticles,
  getArticlesByCategory,
  getArticleById,
  getAllArticlesByStatus,
};
