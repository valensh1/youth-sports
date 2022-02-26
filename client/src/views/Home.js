import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home__container">
        <h1>This is the home page!!!</h1>
        <h2>
          Click on the Players Link in the navbar above to be taken to the
          Players Page where you can see the full CRUD functionality of this
          starter template MERN Stack application
        </h2>
      </div>
    </>
  );
};

export default Home;
