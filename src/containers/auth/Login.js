import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

import { useUserSessionMutation } from '../../features/user/statusSlice';

const Login = (props) => {
  const [userSession] = useUserSessionMutation();

  const [enterEmail, setEnterUser] = useState('');
  const [enterPassword, setEnterPassword] = useState('');

  const userHandler = (e) => {
    setEnterUser(e.target.value);
  };

  const passwordHandler = (e) => {
    setEnterPassword(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      user: {
        email: enterEmail,
        password: enterPassword,
      },
    };
    userSession(userData);
    props.history.push('/');
    setEnterPassword('');
    setEnterUser('');
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
            value={enterEmail}
            onChange={userHandler}
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
            value={enterPassword}
            onChange={passwordHandler}
            required
          />
        </Form.Group>
        <Button type="submit">Login</Button>{' '}
      </Form>
    </div>
  );
};

export default Login;
