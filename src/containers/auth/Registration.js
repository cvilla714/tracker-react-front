import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  createUser,
  selectIsRegistrationLoading,
  setUserProperty,
} from '../../features/user/registrationSlice';

const Registration = (props) => {
  const dispatch = useDispatch();
  const isRegistering = useSelector(selectIsRegistrationLoading);

  const user = useSelector((state) => state);

  const { email, password, password_confirmation } = user;

  const handleChange = (event) => {
    dispatch(
      setUserProperty({
        name: event.target.name,
        value: event.target.value,
      }),
    );
  };

  // you should use local state and pass the user values into arg. it's unnecessary to keep form state in redux.
  const handleSubmit = (event) => {
    dispatch(createUser());
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
            placeholder="Email"
            value={email}
            onChange={handleChange}
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
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password Confirmation</Form.Label>
          <Form.Control
            type="password"
            name="password_confirmation"
            placeholder="Confirm Password"
            value={password_confirmation}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button type="submit" disabled={isRegistering}>
          {isRegistering ? 'Registering...' : 'Register'}
        </Button>
      </Form>
      {/* <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password_confirmation"
          placeholder="Confirm Password"
          value={password_confirmation}
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={isRegistering}>
          {isRegistering ? 'Registering...' : 'Register'}
        </button>
      </form> */}
    </div>
  );
};

export default Registration;
