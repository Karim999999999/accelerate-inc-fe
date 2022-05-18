import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { updateSession, getSessionById } from '../../api/manage';

const SessionForm = () => {
  const { sessionId } = useParams();
  const navigate = useNavigate();

  const [session, setSession] = useState(null);

  const handleChange = e => {
    setSession({
      ...session,
      reasonForCancel: e.target.body,
      status: 'cancelled',
    });
  };

  useEffect(async () => {
    if (sessionId) {
      const session = await getSessionById(sessionId);
      setSession(session);
    }
  }, []);

  const handleCancelSession = async () => {
    await updateSession(sessionId, session);
    console.log(session);
    navigate('/manage/sessions/');
  };

  return (
    <section className='section'>
      <div className='container container-main'>
        <div>
          <h1>Cancel session</h1>
          <form className='form'>
            <label htmlFor='form-body'>Reason for cancellation</label>

            <div>
              {!session || session.sessionStatus !== 'cancelled' ? (
                ''
              ) : (
                <textarea
                  name='body'
                  id='form-body'
                  cols='40'
                  rows='10'
                  onChange={handleChange}
                  value={session.reasonForCancel}
                ></textarea>
              )}
            </div>
            {!session ? (
              <p>Loading...</p>
            ) : (
              <button
                type='submit'
                className='btn'
                onClick={handleCancelSession}
              >
                Cancel
              </button>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default SessionForm;
