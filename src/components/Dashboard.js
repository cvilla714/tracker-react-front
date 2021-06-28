import React from 'react';

const Dashboard = (props) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <h1>Status: {props.loggedInStatus}</h1>
      <h2>User : {props.user}</h2>
    </div>
  );
};

export default Dashboard;
