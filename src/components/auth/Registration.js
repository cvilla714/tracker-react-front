import React, { useState } from 'react';
import axios from 'axios';

const Registration = (props) => {
  const [user, setUser] = useState({
    email: '',
    password: '',
    password_confirmation: '',
    registrationErrors: '',
  });

  const { email, password, password_confirmation } = user;

  const handlChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    axios
      .post(
        'http://localhost:3001/registrations',
        {
          user: {
            email: email,
            password: password,
            password_confirmation: password_confirmation,
          },
        },
        { withCredentials: true },
      )
      .then((response) => {
        if (response.data.status === 'created') {
          props.handleSuccessfulAuth(response.data);
        }
      })
      .catch((error) => {
        console.log('registration error', error);
      });
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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

        <input
          type="password"
          name="password_confirmation"
          placeholder="Confirm Password"
          value={password_confirmation}
          onChange={handlChange}
          required
        />

        <button tupe="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
