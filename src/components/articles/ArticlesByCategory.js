import React, { useState, useEffect } from 'react';
import { getArticlesByCategory } from '../../api/articles';
import { Link, useLocation } from 'react-router-dom';

const ArticlesByCategory = () => {
  const location = useLocation();
  console.log(location.pathname);
  const category = location.pathname.split('/')[3];
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    getArticlesByCategory(category).then(articles => setArticles(articles));
  }, []);

  console.log(articles);

  return (
    <>
      <h1>Articles in {category}</h1>
      <div>
        {!articles ? (
          <p>Loading...</p>
        ) : (
          articles.map(({ _id, title }) => (
            <div key={_id}>
              <p>
                {title} <Link to={`/discover/${_id}`}>View Article</Link>
              </p>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default ArticlesByCategory;
