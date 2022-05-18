/* eslint-disable no-unreachable */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createArticle } from '../../api/articles';

const ArticleForm = (props) => {
  const navigate = useNavigate();
  const categories = ['Cycling 101', 'Life in the city'];

  const [form, setForm] = React.useState({});

  const handleChange = (event) => {
    console.log(handleChange);
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  function handleSubmit(event) {
    event.preventDefault();

    const getData = async () => {
      try {
        await createArticle(form);
        navigate('/');
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }

  return (
    <div>
      <h1>CREATE NEW FORM</h1>

      <div>
        <label htmlFor="form-title">FORM TITLE</label>
      </div>
      <div>
        <input
          name="title"
          type="text"
          onChange={handleChange}
          {...props.body}
        />
      </div>
      <div>
        <label htmlFor="form-body">FORM BODY</label>
      </div>
      <div>
        <textarea
          name="form-body"
          id="form-body"
          cols="40"
          rows="10"
          onChange={handleChange}
          {...props.body}
        ></textarea>
      </div>
      <div>
        <label htmlFor="categories">CATEGORIES</label>
      </div>
      <div>
        <select
          name="categories"
          id="categories"
          onChange={handleChange}
          {...props.body}
        >
          {categories.map((category) => (
            <option key={category}> {category} </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="action-buttons">ACTION BUTTON SPACE</label>
      </div>
      <div>
        <button
          type="submit"
          className="action1"
          onClick={handleSubmit}
          {...props.body}
        >
          Action 1
        </button>
      </div>
    </div>
  );
};

export default ArticleForm;
