import React from 'react';
import { useAuth } from '../../hooks/useAuth';

const UserDashboard: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <h1>Welcome, {user?.name}!</h1>
      <p>This is your dashboard.</p>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
};

export default UserDashboard;