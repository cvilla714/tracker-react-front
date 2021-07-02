import React from 'react';
import axios from 'axios';
import ExpenseItem from './ExpenseItem';

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

  // const authLinks ={
  //   <Fragment>

  //   </Fragment>
  // }

  return (
    <div>
      <h1>Home</h1>
      <h1>Status: {props.loggedInStatus}</h1>
      {/* <h1>Status: {this.props.user}</h1> */}
      <h2>User : {props.user}</h2>
      <button onClick={() => handleLogoutClick()}>Logout</button>
      {/* <Registration handleSuccessfulAuth={handleSuccessfulAuth} />
      <Login handleSuccessfulAuth={handleSuccessfulAuth} /> */}
      <ExpenseItem />
    </div>
  );
};

export default Home;
