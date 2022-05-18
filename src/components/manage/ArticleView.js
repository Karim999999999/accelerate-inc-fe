import React, { useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import { getUserById } from '../../api/auth';
import ArticlesForEditor from './ArticlesForEditor';
import ArticlesByUser from './ArticlesByUser';

const ArticleView = () => {
  const { userId } = jwtDecode(sessionStorage.getItem('token'));

  const [user, setUser] = useState(null);

  useEffect(async () => {
    const currentUser = await getUserById(userId);
    setUser(currentUser);
  }, []);

  console.log(user);

  return (
    <>
      <div>ArticleView</div>
      {!user ? (
        <p>Loading...</p>
      ) : user.isEditor ? (
        <ArticlesForEditor />
      ) : (
        <ArticlesByUser />
      )}
    </>
  );
};

export default ArticleView;
