import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAllArticlesByStatus } from '../../api/articles';
import TableData from './TableData';

const ArticleByStatus = () => {
  const { status } = useParams();

  const [articles, setArticles] = useState(null);

  useEffect(async () => {
    const articlesByStatus = await getAllArticlesByStatus(status);
    setArticles(articlesByStatus);
  }, [status]);

  return (
    <section className='section'>
      <h1>Articles with status {status}</h1>
      {!articles ? <p>Loading...</p> : <TableData tableData={articles} />}
    </section>
  );
};

export default ArticleByStatus;
