import React from 'react';
// import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {
  setUserProperty,
  getUsers,
} from '../../features/user/registrationSlice';

const Registration = (props) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state);

  const { email, password, password_confirmation } = user;
  const handlChange = (event) => {
    dispatch(
      setUserProperty({
        name: event.target.name,
        value: event.target.value,
      }),
    );
  };

  const handleSubmit = (event) => {
    dispatch(getUsers());
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
