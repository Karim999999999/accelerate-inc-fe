import React from 'react';
import { useParams } from 'react-router-dom';

const ShowMessage = () => {
  const { message } = useParams();

  return (
    <section className='section'>
      <div className='container container-main'>
        <div className='message'>Thank You For {message}</div>
      </div>
    </section>
  );
};

export default ShowMessage;
