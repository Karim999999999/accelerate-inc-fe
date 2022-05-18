import React, { useState, useEffect } from 'react';
import { getSessions } from '../../api/manage';
import TableSessions from './TableSessions';
import { Link } from 'react-router-dom';

const SessionHome = () => {
  const [sessions, setSessions] = useState(null);

  useEffect(async () => {
    const sessions = await getSessions();
    setSessions(sessions);
  }, []);

  console.log(sessions);

  return (
    <section className='section'>
      <Link to='/manage/sessions/create' className='new-article'>
        Create New Session
      </Link>
      <h1>Sessions</h1>
      {!sessions ? <p>Loading...</p> : <TableSessions tableData={sessions} />}
    </section>
  );
};

export default SessionHome;
