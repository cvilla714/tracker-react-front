import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLoginProperty, loginUsers } from '../../features/user/loginSlice';

const Login = (props) => {
  const dispatch = useDispatch();

  const loginuser = useSelector((state) => state);

  const { email, password } = loginuser;

  const handlChange = (event) => {
    dispatch(
      setLoginProperty({
        name: event.target.name,
        value: event.target.value,
      }),
    );
  };

  const handleSubmit = (event) => {
    dispatch(loginUsers());
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

        <button tupe="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
