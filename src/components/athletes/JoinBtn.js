import React from 'react';
import { Link } from 'react-router-dom';

const JoinBtn = () => {
  return (
    <Link to='/' className='btn btn-join'>
      Join Our Team
    </Link>
  );
};

export default JoinBtn;
