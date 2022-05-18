import React from 'react';
import { Link } from 'react-router-dom';

import AthleteCard from './AthleteCard';

import athletes from '../../data/athletes.json';
import JoinBtn from './JoinBtn';

const Athletes = () => {
  return (
    <>
      <section className='section section-main section-athletes'>
        <h1>Our Athletes</h1>
        <div className='container container-main container-grid container-athletes'>
          {athletes.map(athlete => (
            <Link key={athlete.id} to={`/athletes/${athlete.id}`}>
              <AthleteCard {...athlete} />
            </Link>
          ))}
        </div>
        <JoinBtn />
      </section>
    </>
  );
};

export default Athletes;
