import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useGetLoginUserInfoQuery } from '../features/user/statusSlice';

const NavigationBar = (props) => {
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
  const { data, error, isLoading } = useGetLoginUserInfoQuery();
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Expenses Tracker</Navbar.Brand>
        <Nav className="mr-auto">
          <Link to="/" className="text-light">
            Home
          </Link>
          <Link to="/register" className="text-white mx-2">
            Register
          </Link>
          <Link to="/login" className="text-light">
            Login
          </Link>
          <li>
            <a
              href="?"
              className="text-light mx-2"
              // onClick={(e) => handleLogout(e)}
              onClick={() => handleLogoutClick()}
            >
              {' '}
              Logout
            </a>
          </li>
        </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {error ? (
            <>Oh no, there was an error</>
          ) : isLoading ? (
            <>Loading...</>
          ) : data.logged_in ? (
            <>
              <Navbar.Text>Hello: {data.user.email}</Navbar.Text>
              {/* <h3>{data.species.name}</h3> */}
              {/* <img src={data.sprites.front_shiny} alt={data.species.name} /> */}
            </>
          ) : (
            <Navbar.Text>Hello: Guess </Navbar.Text>
          )}
          {/* <Navbar.Text>Hello: {props.useremail}</Navbar.Text> */}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
