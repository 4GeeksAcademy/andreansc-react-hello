import React from 'react';

const Jumbotron = () => {
  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="card mb-3 bg-light" style={{ width: '95%' }}>
        <div className="card-body">
          <h1 className="card-title mt-5" style={{ fontSize: '4rem' }}>A Warm Welcome!</h1>
          <p className="card-text mt-2">Today is a unique opportunity for all of us to connect, learn, and share. 
            We are excited to spend this time together and to hear your ideas, thoughts, and experiences.
            We want this space to be open and welcoming, where everyone feels comfortable to participate, 
            ask questions, and, of course, enjoy the time we have together.
            Thank you for being here and for being a part of this experience.</p>
          <a href="#" className="btn btn-primary mb-5">Call to action!</a>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
