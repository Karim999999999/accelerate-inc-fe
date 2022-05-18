import React from 'react';
import { getArticlesByStatusAndUserId } from '../../../api/articles';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
function ArticlesTable() {
  const [tableData, setTableData] = React.useState([]);
  const { status } = useParams();
  React.useEffect(() => {
    const getData = async () => {
      const articles = await getArticlesByStatusAndUserId(status);
      setTableData(articles);
    };

    getData();
  }, [status]);

  console.log('ARTICLES ARE', tableData);

  function handleForm(articleId) {
    if (location.pathname === '/manage/articles/stat/draft') {
      return `/manage/article/${articleId}/draftForm`;
    }
    if (location.pathname === '/manage/articles/stat/editor') {
      return `/manage/article/${articleId}/senttoeditorForm`;
    }
    if (location.pathname === '/manage/articles/stat/published') {
      return `/manage/article/${articleId}/publishedForm`;
    }
    if (location.pathname === '/manage/articles/stat/review') {
      return `/manage/article/${articleId}/reviewForm`;
    }
  }

  return (
    <div className="table-and-controller">
      <h1> Table title </h1>
      <div className="table-controller">
        <Link className="button" to="/manage/articles/stat/draft">
          DRAFTS
        </Link>
        <Link className="button" to="/manage/articles/stat/editor">
          SENT TO EDITOR
        </Link>
        <Link className="button" to="/manage/articles/stat/published">
          PUBLISHED
        </Link>
        <Link className="button" to="/manage/articles/stat/review">
          REVIEW
        </Link>
      </div>

      {!tableData ? (
        <h1>...Loading</h1>
      ) : (
        <div className="table">
          {tableData.map((article) => (
            <div className="table-card" key={article.title}>
              <div className="table-item" id="title">
                <h1>{article.title}</h1>
              </div>
              <div className="table-item" id="date">
                <p>{article.createdAt}</p>
                <p>{article.status}</p>
              </div>
              <div className="table-item" id="viewbutton">
                <Link className="button" to={handleForm(article._id)}>
                  view
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default ArticlesTable;
