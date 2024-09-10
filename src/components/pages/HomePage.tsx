import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const HomePage: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="home-page">
      <h1>PROJECT 0</h1>
      <p>a game. an experiment. a revolution?</p>
      <button onClick={() => loginWithRedirect()}>Enter Project 0</button>
    </div>
  );
};

export default HomePage;