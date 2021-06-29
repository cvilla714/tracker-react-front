import React from 'react';
import axios from 'axios';
import Registration from './auth/Registration';
import Login from './auth/Login';

const Home = (props) => {
  const handleSuccessfulAuth = (data) => {
    console.log(data.user);
    props.handleLogin(data);
    props.history.push('/dashboard');
  };

  const handleLogoutClick = () => {
    axios
      .delete('http://localhost:3001/logout', { withCredentials: true })
      .then((response) => {
        props.handleLogout();
      })
      .catch((error) => {
        console.log('logout error', error);
      });
    props.handleLogout();
  };

  return (
    <div>
      <h1>Home</h1>
      <h1>Status: {props.loggedInStatus}</h1>
      {/* <h1>Status: {this.props.user}</h1> */}
      <h2>User : {props.user}</h2>
      <button onClick={() => handleLogoutClick()}>Logout</button>
      <Registration handleSuccessfulAuth={handleSuccessfulAuth} />
      <Login handleSuccessfulAuth={handleSuccessfulAuth} />
    </div>
  );
};

export default Home;
