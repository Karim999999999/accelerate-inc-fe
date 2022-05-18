import jwtDecode from 'jwt-decode';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAllArticlesByStatus } from '../../api/articles';
import { getUserById } from '../../api/auth';
import { getArticlesByStatus, getArticlesByUserId } from '../../api/manage';
import TableData from './TableData';

const ArticleByStatus = () => {
  const { status } = useParams();
  console.log(status);

  const { userId } = jwtDecode(sessionStorage.getItem('token'));

  const [user, setUser] = useState(null);
  const [articles, setArticles] = useState(null);

  useEffect(async () => {
    const userLogged = await getUserById(userId);
    setUser(userLogged);
  }, []);

  console.log(user);

  useEffect(() => {
    getArticlesByStatus(status).then(articles => setArticles(articles));
  }, [status]);

  console.log(articles);

  return (
    <section className='section'>
      <h1>
        Articles By {user && <span>{user.firstName}</span>} with status {status}
      </h1>
      {!articles ? <p>Loading...</p> : <TableData tableData={articles} />}
    </section>
  );
};

export default ArticleByStatus;
