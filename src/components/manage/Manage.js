import React from 'react';
import { Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

function ManageHome() {
  return (
    <section className='section'>
      <div>
        <h1>Welcome to Manage</h1>
        <p>Manage is your one stop portal for all of your team needs.</p>
        <div className='apps-dashboard-container container-flex'>
          <Link to='/manage/articles/' className='articles'>
            <div className='app-button-container'>
              <h4>Articles</h4>
            </div>
          </Link>
          <Link to='/manage/sessions/' className='sessions'>
            <div className='app-button-container'>
              <h4>Sessions</h4>
            </div>
          </Link>
          <Link
            rel='stylesheet'
            to='/manage/athletes/stat/approved'
            className='athletes'
          >
            <div className='app-button-container'>
              <h4>Athletes</h4>
            </div>
          </Link>
          <Link to='/manage/users/' className='users'>
            <div className='app-button-container'>
              <h4>Users</h4>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ManageHome;
