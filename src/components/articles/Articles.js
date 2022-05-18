import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllArticles, getArticlesByCategory } from '../../api/articles';

const Articles = () => {
  const [articles, setArticles] = useState(null);
  const [articlesBySport, setArticlesBySport] = useState(null);
  const [articlesByTraining, setArticlesByTraining] = useState(null);

  useEffect(() => {
    getAllArticles().then(articles => {
      setArticles(articles.data.data);
    });

    getArticlesByCategory('training').then(articles =>
      setArticlesByTraining(articles)
    );

    getArticlesByCategory('sport').then(articles =>
      setArticlesBySport(articles)
    );
  }, []);

  console.log(articles);

  return (
    <>
      <section className='section'>
        <h1>Welcome to Discover</h1>
        <div className='container container-main'>
          <div className='latest-articles'>
            {!articles ? (
              <p>Loading...</p>
            ) : (
              <div className='main-articles-container'>
                <h2>Featured Articles</h2>
                <div className='container-flex main-articles'>
                  <img
                    src='https://via.placeholder.com/300x400'
                    alt='placeholder'
                  />
                  <div className='main-articles-container'>
                    {articles
                      .slice(0, 4)
                      .map(({ _id, title, createdAt, categories }) => {
                        const date = createdAt.split('-');
                        return (
                          <div className='latest-article' key={_id}>
                            <Link to={`/discover/${_id}`}>{title}</Link>{' '}
                            <span className='date'>
                              {date[2].slice(0, 2)}/{date[1]}/{date[0].slice(2)}
                            </span>
                            <span className='category'>{categories[0]}</span>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className='container-flex container-categories'>
            <div className='articles-by-category'>
              {!articlesBySport ? (
                <p>Loading...</p>
              ) : (
                <div className='category-box'>
                  <h3>
                    <Link to='/discover/category/sport'>sport</Link>
                  </h3>
                  {articlesBySport.slice(0, 4).map(({ _id, title }) => (
                    <div className='category-row' key={_id}>
                      <p>{title}</p>
                      <Link to={`/discover/${_id}`} className='category'>
                        View Article
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className='articles-by-category'>
              {!articlesByTraining ? (
                <p>Loading...</p>
              ) : (
                <div className='category-box'>
                  <h3>
                    <Link to='/discover/category/training'>training</Link>
                  </h3>
                  {articlesByTraining.slice(0, 4).map(({ _id, title }) => (
                    <div className='category-row' key={_id}>
                      <p>{title}</p>
                      <Link to={`/discover/${_id}`} className='category'>
                        View Article
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Articles;
