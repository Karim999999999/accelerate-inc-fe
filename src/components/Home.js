import jwtDecode from 'jwt-decode';
import React, { useEffect, useState } from 'react';

import { getUserById } from '../api/auth';

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(async () => {
    if (sessionStorage.getItem('token')) {
      const id = jwtDecode(sessionStorage.getItem('token')).userId;
      const user = await getUserById(id);
      setUser(user);
    }
  }, [user]);
  return (
    <div className='home-page'>
      <div className='hero'>
        <h1>ACCELERATE INC.</h1>
        <p>Your one stop show for athlete and team management!</p>
      </div>
      <div className='section-is-half'>
        <div className='is-half'>
          <div className='content center-object'>
            <h1>THE PROJECT</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              quisquam alias repellat officiis nihil reprehenderit temporibus
              magni molestias harum iure sunt maiores nulla, corporis, provident
              hic! Incidunt veniam necessitatibus delectus? Cum nesciunt
              delectus perspiciatis nulla iste inventore, reprehenderit facilis
              a temporibus id culpa sed fugiat rem quod voluptatem praesentium
              sapiente voluptate illo ipsum consequatur labore tenetur. Adipisci
              asperiores odio inventore.
            </p>
          </div>
        </div>
        <div className='is-half'>
          <img
            src='https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            alt='athlete image'
          />
        </div>
      </div>
      <div className='section'>
        <div className='content'>
          <h1>KEY FEATURES</h1>
          <div className='section-is-half'>
            <div className='feature-card'>
              <h2>ARTICLE MANAGEMENT</h2>
              <ul>
                <li>Edit and Save Articles</li>
                <li>Published Workflow for Article Approval</li>
                <li>Article Categories</li>
              </ul>
            </div>
            <div className='feature-card'>
              <h2>ATHLETE MANAGEMENT</h2>
              <ul>
                <li>Recieve, Edit and Manage Athlete Applications</li>
                <li>View Athlete Sessions, and Medical Incidents</li>
                <li>Athlete Profile View</li>
              </ul>
            </div>
            <div className='feature-card'>
              <h2>SESSION MANAGEMENT</h2>
              <ul>
                <li>Create New Sessions</li>
                <li>Attendance Tracker</li>
                <li>Session Cancelation</li>
              </ul>
            </div>
            <div className='feature-card'>
              <h2>INJURY MANAGEMENT</h2>
              <ul>
                <li>Access for Medical Professionals</li>
                <li>Log Medical Injuries</li>
                <li>View Medical Injuries</li>
              </ul>
            </div>
            <div className='feature-card'>
              <h2>USER MANAGEMENT</h2>
              <ul>
                <li>Create New Users</li>
                <li>Set User Privellages</li>
                <li>Change Password</li>
              </ul>
            </div>
            <div className='feature-card'>
              <h2>DYNAMIC FRONT END</h2>
              <ul>
                <li>Display Approved Articles</li>
                <li>Display Approved Athletes</li>
                <li>Login Protected</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
