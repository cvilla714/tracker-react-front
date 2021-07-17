import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { useRegisterUserMutation } from '../../features/user/statusSlice';
import useForm from '../../components/Hooks/useForm';

const Registration = (props) => {
  const { form, handleChange, clearForm } = useForm({
    email: '',
    password: '',
    password_confirmation: '',
  });

  const history = useHistory();
  const [registerUser] = useRegisterUserMutation();

  const handleSubmit = (event) => {
    event.preventDefault();
    const useDataRegistration = {
      user: {
        email: form.email,
        password: form.password,
        password_confirmation: form.password_confirmation,
      },
    };
    registerUser(useDataRegistration);
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
            placeholder="Email"
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
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password Confirmation</Form.Label>
          <Form.Control
            type="password"
            name="password_confirmation"
            placeholder="Confirm Password"
            value={form.password_confirmation}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button type="submit">Register</Button>
      </Form>
    </div>
  );
};

export default Registration;
