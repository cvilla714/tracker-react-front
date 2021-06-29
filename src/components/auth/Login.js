import React, { useState } from 'react';
import axios from 'axios';

const Login = (props) => {
  // constructor(props) {
  //   super(props);

  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    loginErrors: '',
  });

  // this.state = {
  //     email: '',
  //     password: '',
  //     loginErrors: '',
  //   };

  // this.handleSubmit = this.handleSubmit.bind(this);
  // this.handlChange = this.handlChange.bind(this);

  const { email, password } = userInfo;

  const handlChange = (event) => {
    // console.log('handle change', event);
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });

    // this.setState({
    //   [event.target.name]: event.target.value,
    // });
  };

  const handleSubmit = (event) => {
    // console.log('form submitted');
    // console.log(event);

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
        // console.log('response from login', response);
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
