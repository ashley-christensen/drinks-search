import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section className='error-page'>
      <div className='error-container'>
        <h1>Oh no! Something went wrong..</h1>
        <Link to='/' className='btn btn-primary'>
          Back Home
        </Link>
      </div>
    </section>
  );
};

export default Error;
