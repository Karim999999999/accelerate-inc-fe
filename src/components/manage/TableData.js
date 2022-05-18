import React, { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import { Link } from 'react-router-dom';
import { getUserById } from '../../api/auth';

const TableData = ({ tableData }) => {
  const { userId } = jwtDecode(sessionStorage.getItem('token'));

  const [user, setUser] = useState(null);

  useEffect(async () => {
    const user = await getUserById(userId);
    setUser(user);
  }, []);

  return (
    <div className='table-and-controller'>
      <>
        <div className='table container container-main'>
          <ul>
            {!user ? (
              <p>Loading...</p>
            ) : user.isEditor ? (
              <>
                <li>
                  <Link to='/articles/editor'>New Articles</Link>
                </li>
                <li>
                  <Link to='/articles/published'>Published</Link>
                </li>
                <li>
                  <Link to='/articles/review'>Sent for Review</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to={`/articles/${userId}/draft`}>Drafts</Link>
                </li>
                <li>
                  <Link to={`/articles/${userId}/editor`}>Out For Edit</Link>
                </li>
                <li>
                  <Link to={`/articles/${userId}/published`}>Published</Link>
                </li>
                <li>
                  <Link to={`/articles/${userId}/review`}>Review</Link>
                </li>
              </>
            )}
          </ul>

          {tableData.data.map(({ _id, title, createdAt, status }) => (
            <div className='table-card' key={_id}>
              <div className='table-item' id='title'>
                <h2>{title}</h2>
              </div>
              <div className='table-item' id='date'>
                <p>{createdAt}</p>
                <p>{status}</p>
              </div>
              <div className='table-item btn btn-view' id='viewbutton'>
                <Link
                  className='button'
                  to={`/manage/articles/${_id}/${status}`}
                >
                  view
                </Link>
              </div>
            </div>
          ))}
        </div>
      </>
    </div>
  );
};

export default TableData;
