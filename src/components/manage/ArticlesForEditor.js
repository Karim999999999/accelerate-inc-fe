import React, { useState, useEffect } from 'react';
import TableData from './TableData';
import { getAllArticles } from '../../api/articles';

const ArticlesForEditor = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    getAllArticles()
      // .then(articles =>
      //   articles.data.filter(article => article.status !== 'draft')
      // )
      .then(articles => setArticles(articles.data));
  }, []);

  console.log(articles);

  return (
    <section className='section'>
      <h1>Publisher Panel</h1>
      {!articles ? <p>Loading...</p> : <TableData tableData={articles} />}
    </section>
  );
};

export default ArticlesForEditor;
