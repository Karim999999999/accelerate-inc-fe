import React from 'react';
import { useParams } from 'react-router-dom';
import athletes from '../../data/athletes.json';

import JoinBtn from './JoinBtn';

const SingleAthlete = () => {
  const { id } = useParams();
  const athlete = athletes.find((athlete) => athlete.id === parseInt(id));

  return (
    <>
      <section className='section section-single section-athletes'>
        <div className='container container-main'>
          <h1>{athlete.name}</h1>

          <div className='container-flex container-athlete'>
            <img src='https://via.placeholder.com/400x600' alt='' />
            <div className='athlete-details'>
              <p>
                {athlete.name}, {athlete.age}
              </p>
            </div>
          </div>

          <div className='center'>
            <JoinBtn />
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleAthlete;
