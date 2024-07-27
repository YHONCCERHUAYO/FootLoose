import React from 'react';
import { useAuth } from '../auth/AuthContext';

const Dashboard = () => {
  const auth = useAuth();

  const handleLogout = () => {
    auth.logout();
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {auth.user?.username}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
