import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setLoginProperty } from '../../features/user/loginSlice';

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
    axios
      .post(
        'http://localhost:3001/sessions',
        {
          user: {
            email: email,
            password: password,
          },
        },
        { withCredentials: true },
      )
      .then((response) => {
        if (response.data.logged_in === true) {
          props.handleSuccessfulAuth(response.data);
        }
      })
      .catch((error) => {
        console.log(' login error', error);
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

        <button tupe="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
