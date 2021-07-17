import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import useForm from '../../components/Hooks/useForm';
import { useUserSessionMutation } from '../../features/user/statusSlice';

const Login = (props) => {
  const { form, handleChange, clearForm } = useForm({
    email: '',
    password: '',
  });
  const history = useHistory();
  const [userSession] = useUserSessionMutation();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      user: {
        email: form.email,
        password: form.password,
      },
    };
    userSession(userData);
    history.push('/');
    clearForm();
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
            value={form.email}
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
            value={form.password}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button type="submit">Login</Button>{' '}
      </Form>
    </div>
  );
};

export default Login;
