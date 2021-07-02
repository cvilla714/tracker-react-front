import React from 'react';
import axios from 'axios';
import Registration from '../containers/auth/Registration';
import Login from '../containers/auth/Login';
import ExpenseItem from './ExpenseItem';
import { Navbar, Nav } from 'react-bootstrap';

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
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Expenses Tracker</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Hello: <a href="#login">Guest</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      <h1>Home</h1>
      <h1>Status: {props.loggedInStatus}</h1>
      {/* <h1>Status: {this.props.user}</h1> */}
      <h2>User : {props.user}</h2>
      <button onClick={() => handleLogoutClick()}>Logout</button>
      <Registration handleSuccessfulAuth={handleSuccessfulAuth} />
      <Login handleSuccessfulAuth={handleSuccessfulAuth} />
      <ExpenseItem />
    </div>
  );
};

export default Home;
