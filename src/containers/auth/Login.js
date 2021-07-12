import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   loginUser,
//   setUserProperty,
//   selectIsLoginLoading,
// } from '../../features/user/loginSlice';
import { useUserSessionMutation } from '../../features/user/statusSlice';

const Login = (props) => {
  // const dispatch = useDispatch();
  // const isLoginLoading = useSelector(selectIsLoginLoading);
  // const user = useSelector((state) => state);
  // const { email, password } = user;
  // console.log(user);
  const [userSession] = useUserSessionMutation();

  const [enterEmail, setEnterUser] = useState('');
  const [enterPassword, setEnterPassword] = useState('');

  const userHandler = (e) => {
    setEnterUser(e.target.value);
    console.log(e.target.value);
  };

  const passwordHandler = (e) => {
    setEnterPassword(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      user: {
        email: enterEmail,
        password: enterPassword,
      },
    };
    userSession(userData);
    setEnterPassword('');
    setEnterUser('');
  };
  // const handlChange = (event) => {
  //   dispatch(
  //     setUserProperty({
  //       name: event.target.name,
  //       value: event.target.value,
  //     }),
  //   );
  // };

  // const handleSubmit = (event) => {
  //   dispatch(loginUser());
  //   event.preventDefault();
  //   // props.history.push('/');
  // };

  return (
    <div className="container">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            // value={email}
            value={enterEmail}
            onChange={userHandler}
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
            // value={password}
            value={enterPassword}
            onChange={passwordHandler}
            required
          />
        </Form.Group>
        {/* <Button type="submit" disabled={isLoginLoading}> */}
        <Button type="submit">
          {/* {isLoginLoading ? 'Loggin you in...' : 'Log in'}{' '} */}
          Login
        </Button>{' '}
      </Form>
    </div>
  );
};

export default Login;
