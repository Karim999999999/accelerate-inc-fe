import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { createSessions, getSessionById } from '../../api/manage';
import jwtDecode from 'jwt-decode';
import { getUserById } from '../../api/auth';
import JoinBtn from '../athletes/JoinBtn';

const SessionForm = () => {
  const { userId } = jwtDecode(sessionStorage.getItem('token'));
  const { sessionId } = useParams();
  console.log(sessionId);

  const initialSessionState = {
    dateAndTime: '',
    location: '',
    sessionType: '',
    sessionLength: 0,
    distanceCycledKm: 0,
    attendance: [],
    coach: userId,
  };

  const [session, setSession] = useState(initialSessionState);
  const [date, setDate] = useState(null);
  const [user, setUser] = useState(null);

  const handleChange = e => {
    const newSession = { ...session, [e.target.name]: e.target.value };

    setSession(newSession);
  };

  useEffect(() => {
    setSession({ ...session, dateAndTime: new Date(date) });
  }, [date]);

  useEffect(async () => {
    if (sessionId) {
      const session = await getSessionById(sessionId);
      setSession(session);
    }

    const user = await getUserById(userId);
    setUser(user);
  }, []);

  console.log(session);

  function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }

  function formatDate(date) {
    return [
      padTo2Digits(date.getDate()),
      padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join('/');
  }

  const formattedDate = formatDate(new Date(session.dateAndTime));

  const handleSumbit = async () => {
    const fixedSession = {
      ...session,
      sessionLength: Number(session.sessionLength),
      distanceCycledKm: Number(session.distanceCycledKm),
    };

    await createSessions(fixedSession);
  };

  return (
    <section className='section'>
      <div className='container container-main'>
        <div>
          {!sessionId ? <h1>New Session</h1> : <h1>View Session</h1>}
          <form className='form'>
            <div>
              <label htmlFor='date-picker'>Pick a Date</label>
              <DatePicker
                selected={date}
                onChange={date => setDate(date)}
                dateFormat='MM/dd/yy'
              />
              <input type='text' className='date-input' value={formattedDate} />
            </div>
            <div>
              <label htmlFor='location'>location</label>
            </div>
            <div>
              <input
                type='text'
                name='location'
                id='location'
                value={session.location}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor='sessionType'>Training Type</label>
            </div>
            <div>
              <input
                type='text'
                name='sessionType'
                id='sessionType'
                value={session.sessionType}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor='sessionLength'>Training Length</label>
            </div>
            <div>
              <input
                type='text'
                name='sessionLength'
                id='sessionLength'
                value={session.sessionLength}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor='distanceCycledKm'>Distance to Cycle</label>
            </div>
            <div>
              <input
                type='text'
                name='distanceCycledKm'
                id='distanceCycledKm'
                value={session.distanceCycledKm}
                onChange={handleChange}
              />
            </div>
            {!sessionId ? (
              <button type='submit' className='btn' onClick={handleSumbit}>
                Create Session
              </button>
            ) : (
              <Link className='btn' to={`/manage/sessions/cancel/${sessionId}`}>
                Cancel
              </Link>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default SessionForm;
