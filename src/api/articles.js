import axios from 'axios';

const getAllArticles = () =>
  axios.request({
    method: 'GET',
    url: '/api/articles',
  });

const getArticlesByCategory = category =>
  axios
    .request({
      method: 'GET',
      url: '/api/articles',
      params: { 'categories[in]': category },
    })
    .then(({ data }) => data.data);

const getAllArticlesByStatus = status =>
  axios
    .request({
      method: 'GET',
      url: '/api/articles',
      params: { status },
    })
    .then(data => data.data);

const getArticleById = id =>
  axios
    .request({
      method: 'GET',
      url: `/api/articles/${id}`,
    })
    .then(({ data }) => data);

export {
  getAllArticles,
  getArticlesByCategory,
  getArticleById,
  getAllArticlesByStatus,
};
