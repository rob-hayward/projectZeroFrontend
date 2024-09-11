import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './HomePage.css';

const HomePage: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="home-page">
      <h1>PROJECT ZER0</h1>
      <div className="content-wrapper">
        <h2>EXPERIMENT / GAME / REVOLUTION</h2>
        <button className="enter-button" onClick={() => loginWithRedirect()}>
          ENTER
        </button>
      </div>
    </div>
  );
};

export default HomePage;