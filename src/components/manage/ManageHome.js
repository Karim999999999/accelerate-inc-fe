import React from 'react';
import { Link } from 'react-router-dom';

function ManageHome() {
  return (
    <div>
      <h1>Welcome to Manage</h1>
      <p>Manage is your one stop portal for all of your team needs.</p>
      <div className="apps-dashboard-container">
        <Link rel="stylesheet" to="/manage/articles/stat/draft">
          <div className="app-button-container">
            <div className="app-icon" id="article-app"></div>
            <h4>ARTICLES</h4>
          </div>
        </Link>
        <Link rel="stylesheet" to="/manage/athletes/stat/approved">
          <div className="app-button-container">
            <div className="app-icon" id="athlete-app"></div>
            <h4>ATHLETE</h4>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ManageHome;
