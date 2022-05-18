import axios from 'axios';

const token = sessionStorage.getItem('token');

const getArticlesByUserId = id =>
  axios
    .request({
      method: 'GET',
      url: `/api/manage/articles`,
      headers: {
        authorization: `Bearer ${token}`,
      },
      params: {
        author: id,
      },
    })
    .then(({ data }) => data);

const getArticlesByStatus = status =>
  axios
    .request({
      method: 'GET',
      url: `/api/manage/articles/status/`,
      headers: {
        authorization: `Bearer ${token}`,
      },
      params: {
        status,
      },
    })
    .then(({ data }) => data);

const createArticle = article =>
  axios.request({
    method: 'POST',
    url: '/api/articles',
    headers: {
      authorization: `Bearer ${token}`,
    },
    data: article,
  });

const updateArticle = async article => {
  try {
    await axios.put(`/api/articles/${article._id}`, article);
  } catch (error) {
    console.log(error);
  }
};

const removeArticle = articleId =>
  axios.request({
    method: 'DELETE',
    url: `/api/articles/${articleId}`,
  });

export {
  getArticlesByUserId,
  getArticlesByStatus,
  createArticle,
  updateArticle,
  removeArticle,
};

const getSessions = () =>
  axios.request({
    method: 'GET',
    url: '/api/sessions',
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

const createSessions = session =>
  axios.request({
    method: 'POST',
    url: '/api/sessions',
    headers: {
      authorization: `Bearer ${token}`,
    },
    data: session,
  });

const updateSession = async session => {
  try {
    await axios.put(`/api/sessions/${session._id}`, session);
  } catch (error) {
    console.log(error);
  }
};

const getSessionsByStatus = status =>
  axios
    .request({
      method: 'GET',
      url: `/api/sessions/status/`,
      headers: {
        authorization: `Bearer ${token}`,
      },
      params: {
        sessionStatus: status,
      },
    })
    .then(({ data }) => data);

const getSessionById = id =>
  axios
    .request({
      method: 'GET',
      url: `/api/sessions/${id}`,
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
    .then(({ data }) => data);

export {
  getSessions,
  getSessionById,
  createSessions,
  updateSession,
  getSessionsByStatus,
};
