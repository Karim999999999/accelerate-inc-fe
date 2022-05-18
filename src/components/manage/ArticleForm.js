import React, { useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getArticleById } from '../../api/articles';
import { getUserById } from '../../api/auth';
import { createArticle, removeArticle, updateArticle } from '../../api/manage';

const ArticleForm = () => {
  const navigate = useNavigate();
  const categories = ['Cycling 101', 'Life in the city'];
  const { articleId, status } = useParams();

  const { userId } = jwtDecode(sessionStorage.getItem('token'));

  const [user, setUser] = useState(null);
  const [message, setMessage] = useState(null);
  const [article, setArticle] = useState({
    title: '',
    body: '',
    categories: [],
    status: '',
  });

  useEffect(async () => {
    if (articleId) {
      const article = await getArticleById(articleId);
      setArticle(article);
    }

    const user = await getUserById(userId);
    setUser(user);
  }, []);

  const setFormTitle = (articleId, user) => {
    if (!articleId) {
      return 'Create New Article';
    } else if (user.isEditor) {
      return 'Pending Article';
    } else {
      return 'Your Article';
    }
  };

  const setActionButtons = (articleId, user) => {
    if (!articleId) {
      return (
        <div>
          <button type='submit' className='save btn' onClick={handleSubmit}>
            Save
          </button>
          <button
            type='button'
            className='set-to-editor btn'
            onClick={setArticleStatusToEditor}
          >
            Send to Editor
          </button>
        </div>
      );
    } else if (status === 'draft') {
      return (
        <div>
          <button
            type='submit'
            id='draft'
            className='save btn'
            onClick={modifyArticle}
          >
            Save
          </button>
          <button
            type='button'
            className='set-to-editor btn'
            onClick={setArticleStatusToEditor}
          >
            Send to Editor
          </button>
        </div>
      );
    } else if (status === 'editor' && user.isEditor) {
      return (
        <div>
          <button
            type='button'
            className='set-to-editor btn'
            onClick={setArticleStatusToPublished}
          >
            Publish
          </button>
          <button
            type='button'
            className='set-to-editor btn'
            onClick={setArticleStatusToReview}
          >
            Send For Review
          </button>
        </div>
      );
    } else if (status === 'editor') {
      return (
        <div>
          <button
            type='button'
            className='set-to-editor btn'
            onClick={setArticleStatusToDraft}
          >
            Cancel Publishing
          </button>
        </div>
      );
    } else if (status === 'published') {
      return (
        <div>
          <button
            type='button'
            className='set-to-editor btn'
            onClick={setArticleStatusToDraft}
          >
            Unpublish
          </button>
          <button
            type='button'
            className='set-to-editor btn'
            onClick={deleteArticle}
          >
            Delete Article
          </button>
        </div>
      );
    } else if (status === 'review' && user.isEditor) {
      return (
        <div>
          <Link
            className='btn'
            to={`/manage/show-message/${'Sending A Reminder To The Writer'}`}
          >
            Reminder
          </Link>
          <button
            type='button'
            className='set-to-editor btn'
            onClick={setArticleStatusToDraft}
          >
            Cancel Publishing
          </button>
        </div>
      );
    } else if (status === 'review') {
      return (
        <div>
          <button type='submit' className='save btn' onClick={handleSubmit}>
            Save
          </button>
          <button
            type='button'
            className='set-to-editor btn'
            onClick={setArticleStatusToEditor}
          >
            Send to Editor
          </button>
        </div>
      );
    }
  };

  const handleChange = event => {
    console.log(handleChange);
    setArticle({ ...article, [event.target.name]: event.target.value });
  };

  const handleCategoryChange = e => {
    setArticle({ ...article, categories: [...categories, e.target.value] });
  };

  const deleteArticle = async () => {
    await removeArticle(articleId);
  };

  const modifyArticle = async e => {
    e.preventDefault();
    try {
      await updateArticle(article);
      navigate(-1);
    } catch (err) {
      console.log(error.message);
    }
  };

  function handleSubmit(event) {
    event.preventDefault();

    const getData = async () => {
      try {
        await createArticle(article);
        navigate('/');
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }

  const setArticleStatusToEditor = async () => {
    setArticle({ ...article, status: 'editor' });
  };

  const setArticleStatusToPublished = async () => {
    setArticle({ ...article, status: 'published' });
  };

  const setArticleStatusToReview = async () => {
    setArticle({ ...article, status: 'review' });
  };

  const setArticleStatusToDraft = async () => {
    setArticle({ status: 'draft' });
  };

  const showMessage = text => {
    navigate(`/manage/show-message/${'Sending A Reminder To The Editor'}`, {
      message: text,
    });
  };

  return (
    <section className='section'>
      <div className='container container-main'>
        <div>
          <h1>{!user ? 'Loading...' : setFormTitle(articleId, user)}</h1>
          <form className='form'>
            <div>
              <label htmlFor='form-title'>FORM TITLE</label>
            </div>
            <div>
              <input
                name='title'
                type='text'
                onChange={handleChange}
                value={article.title}
              />
            </div>
            <div>
              <label htmlFor='form-body'>FORM BODY</label>
            </div>
            <div>
              <textarea
                name='body'
                id='form-body'
                cols='40'
                rows='10'
                onChange={handleChange}
                value={article.body}
              ></textarea>
            </div>
            <div>
              <label htmlFor='categories'>CATEGORIES</label>
            </div>
            <div>
              <select
                name='categories'
                id='categories'
                onChange={handleCategoryChange}
              >
                {!articleId
                  ? categories.map(category => (
                      <option key={category}> {category} </option>
                    ))
                  : article.categories.map(category => (
                      <option key={category}> {category} </option>
                    ))}
              </select>
            </div>
            {!user ? 'Loading...' : setActionButtons(articleId, user)}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ArticleForm;
