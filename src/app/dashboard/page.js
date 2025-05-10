'use client';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const user = useSelector((state) => state.user);

  return (
    <div style={{ padding: 40 }}>
      <h1>Welcome to Dashboard Page</h1>
      {user ? (
        <p>Logged in as: <strong>{user.name}</strong> ({user.email})</p>
      ) : (
        <p>User not logged in</p>
      )}
    </div>
  );
};

export default Dashboard;
