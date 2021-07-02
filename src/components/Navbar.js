import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const NavigationBar = () => {
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
        </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>Hello: Guest</Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
