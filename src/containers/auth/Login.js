import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  loginUser,
  setUserProperty,
  selectIsLoginLoading,
} from '../../features/user/loginSlice';

const Login = (props) => {
  const dispatch = useDispatch();
  const isLoginLoading = useSelector(selectIsLoginLoading);
  const user = useSelector((state) => state);
  const { email, password } = user;

  const handlChange = (event) => {
    dispatch(
      setUserProperty({
        name: event.target.name,
        value: event.target.value,
      }),
    );
  };

  const handleSubmit = (event) => {
    dispatch(loginUser());
    event.preventDefault();
  };

  return (
    <div className="container">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            value={email}
            onChange={handlChange}
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handlChange}
            required
          />
        </Form.Group>
        <Button type="submit" disabled={isLoginLoading}>
          {isLoginLoading ? 'Loggin you in...' : 'Log in'}{' '}
        </Button>{' '}
      </Form>
      {/* <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handlChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handlChange}
          required
        />
        <button type="submit" disabled={isLoginLoading}>
          {isLoginLoading ? 'Loggin you in...' : 'Log in'}{' '}
        </button>{' '}
      </form> */}
    </div>
  );
};

export default Login;
