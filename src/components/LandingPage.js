import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <main className='container'>
      <h1 className='heading'>Welcome To Curiosum</h1>
      <h2 className='sub-heading'>
        Find Out Which Rapper Your Personality Matches With
      </h2>

      <div className='btn-container'>
        <Link className='start-btn' to='/quiz'>
          Get Started
        </Link>
      </div>
    </main>
  );
};

export default LandingPage;
