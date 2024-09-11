import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage: React.FC = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = () => {
    loginWithRedirect();
  };

  return (
    <div className="home-page">
      <h1>PROJECT ZER0</h1>
      <div className="content-wrapper">
        <h2>EXPERIMENT / GAME / REVOLUTION</h2>
        <button 
          className="enter-button" 
          onClick={handleLogin}
          aria-label="Enter Project Zero"
        >
          ENTER
        </button>
      </div>
    </div>
  );
};

export default HomePage;