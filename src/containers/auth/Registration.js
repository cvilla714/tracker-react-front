import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { useRegisterUserMutation } from '../../features/user/statusSlice';

const Registration = (props) => {
  const history = useHistory();
  const [registerUser] = useRegisterUserMutation();

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userPasswordConfirmation, setUserPasswordCofirmation] = useState('');

  const emailHandleChange = (e) => {
    setUserEmail(e.target.value);
    console.log(e.target.value);
  };

  const passwordHandleChange = (e) => {
    setUserPassword(e.target.value);
    console.log(e.target.value);
  };

  const passwordConfirmationHandleChange = (e) => {
    setUserPasswordCofirmation(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const useDataRegistration = {
      user: {
        email: userEmail,
        password: userPassword,
        password_confirmation: userPasswordConfirmation,
      },
    };
    registerUser(useDataRegistration);
    history.push('/');
    setUserEmail('');
    setUserPassword('');
    setUserPasswordCofirmation('');
  };

  return (
    <div className="container">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Email"
            value={userEmail}
            onChange={emailHandleChange}
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
            value={userPassword}
            onChange={passwordHandleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password Confirmation</Form.Label>
          <Form.Control
            type="password"
            name="password_confirmation"
            placeholder="Confirm Password"
            value={userPasswordConfirmation}
            onChange={passwordConfirmationHandleChange}
            required
          />
        </Form.Group>
        <Button type="submit">Register</Button>
      </Form>
    </div>
  );
};

export default Registration;
