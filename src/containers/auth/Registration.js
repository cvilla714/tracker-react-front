import React from 'react';
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
    <div>
      <form onSubmit={handleSubmit}>
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
      </form>
    </div>
  );
};

export default Registration;
