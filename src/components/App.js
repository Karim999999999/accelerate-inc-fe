import React, { useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../styles/style.scss';
import About from './about/About';
import Articles from './articles/Articles';
import ArticlesByCategory from './articles/ArticlesByCategory';
import SingleArticle from './articles/SingleArticle';
import Athletes from './athletes/Athletes';
import SingleAthlete from './athletes/SingleAthlete';
import Login from './auth/Login';
import Home from './Home';

import ArticleByStatusForEditor from './manage/ArticleByStatusForEditor';
import ArticleByStatus from './manage/ArticleByStatus';
import ArticleForm from './manage/ArticleForm';
import ManageHome from './manage/Manage';
import Navbar from './Navbar';

import AthleteTable from './manage/athlete-manager/athletesTable';
import NewAthleteForm from './athletes/NewAthleteForm';
import AthleteManager from './manage/athlete-manager/AthleteManagerProfile';
import SessionHome from './sessions/SessionHome';
import SessionForm from './sessions/SessionForm';
import ArticleView from './manage/ArticleView';
import ShowMessage from './manage/ShowMessage';
import ArticlesForEditor from './manage/ArticlesForEditor';
import SessionsByStatus from './sessions/SessionsByStatus';
import CancelSessionForm from './sessions/CancelSessionForm';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/discover' element={<Articles />} />
        <Route path='/discover/:id' element={<SingleArticle />} />
        <Route path='/manage' element={<ManageHome />} />
        <Route
          path='/discover/category/:category'
          element={<ArticlesByCategory />}
        />
        <Route path='/manage/articles' element={<ArticleView />} />
        <Route path='/manage/articles/create' element={<ArticleForm />} />
        <Route path='/articles/:userId/:status' element={<ArticleByStatus />} />
        <Route
          path='/manage/articles/:articleId/:status'
          element={<ArticleForm />}
        />
        <Route
          path='/manage/articles/:status'
          element={<ArticlesForEditor />}
        />
        <Route
          path='/articles/:status'
          element={<ArticleByStatusForEditor />}
        />
        <Route path='/manage/show-message/:message' element={<ShowMessage />} />
        <Route path='/athletes' element={<Athletes />} />
        <Route path='/athletes/:id' element={<SingleAthlete />} />
        <Route
          path='/manage/athletes/stat/:status'
          element={<AthleteTable />}
        />
        <Route path='/login' element={<Login />} />
        <Route path='/newAthlete' element={<NewAthleteForm />} />
        <Route path='/manage/athlete/:athleteId' element={<AthleteManager />} />
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path='/manage/sessions' element={<SessionHome />} />
        <Route path='/manage/sessions/create' element={<SessionForm />} />
        <Route path='/manage/sessions/:sessionId' element={<SessionForm />} />
        <Route
          path='/manage/sessions/status/:status'
          element={<SessionsByStatus />}
        />
        <Route
          path='/manage/sessions/cancel/:sessionId'
          element={<CancelSessionForm />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
