import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import {
  useGetLoginUserInfoQuery,
  useLogoutUserMutation,
} from '../features/user/statusSlice';

const NavigationBar = () => {
  const { data, error, isLoading } = useGetLoginUserInfoQuery();
  const [logoutUser] = useLogoutUserMutation();

  const loggedIn = data?.logged_in ? true : false;
  const isLoggedIn = data?.logged_in ? '/' : '/login';
  console.log(isLoggedIn);

  const authLinks = (
    <Nav className="mr-auto">
      <Link to={isLoggedIn} className="text-light">
        Home
      </Link>
      <li>
        <a href="?" className="text-light mx-2" onClick={() => logoutUser()}>
          {' '}
          Logout
        </a>
      </li>
    </Nav>
  );

  const guessLinks = (
    <Nav className="mr-auto">
      <Link to={isLoggedIn} className="text-light">
        Home
      </Link>
      <Link to="/register" className="text-white mx-2">
        Register
      </Link>
      <Link to="/login" className="text-light">
        Login
      </Link>
    </Nav>
  );

  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Expenses Tracker</Navbar.Brand>
        <Nav className="mr-auto">
          {loggedIn ? authLinks : guessLinks}
          {/* <Link to="/" className="text-light">
            Home
          </Link>
          <Link to="/register" className="text-white mx-2">
            Register
          </Link>
          <Link to="/login" className="text-light">
            Login
          </Link>
          <Link to="/loco" className="text-light">
            Loco
          </Link>
          <li>
            <a
              href="?"
              className="text-light mx-2"
              onClick={() => logoutUser()}
            >
              {' '}
              Logout
            </a>
          </li> */}
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
            </>
          ) : (
            <Navbar.Text>Hello: Guess </Navbar.Text>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
