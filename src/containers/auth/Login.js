import React from 'react';
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

        <button type="submit" disabled={isLoginLoading}>
          {isLoginLoading ? 'Loggin you in...' : 'Log in'}{' '}
        </button>
      </form>
    </div>
  );
};

export default Login;
