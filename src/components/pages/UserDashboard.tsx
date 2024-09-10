import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const UserDashboard: React.FC = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated ? (
      <div>
        <h2>User Dashboard</h2>
        <p>Welcome, {user?.name}!</p>
      </div>
    ) : (
      <div>Please log in to view this page.</div>
    )
  );
};

export default UserDashboard;