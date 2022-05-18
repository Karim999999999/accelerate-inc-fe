import React from 'react';

const AthleteCard = ({ name, age }) => {
  return (
    <div className='card card-athlete'>
      <img src='https://via.placeholder.com/300x400' alt='' />
      <p>
        {name}, {age}
      </p>
    </div>
  );
};

export default AthleteCard;
