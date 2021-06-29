import React, { useState } from 'react';
import axios from 'axios';

const Registration = (props) => {
  // constructor(props) {
  //   super(props);
  const [user, setUser] = useState({
    email: '',
    password: '',
    password_confirmation: '',
    registrationErrors: '',
  });

  // this.state = {
  //     email: '',
  //     password: '',
  //     password_confirmation: '',
  //     registrationErrors: '',
  //   };

  //   this.handleSubmit = this.handleSubmit.bind(this);
  //   this.handlChange = this.handlChange.bind(this);
  const { email, password, password_confirmation } = user;

  const handlChange = (event) => {
    // console.log('handle change', event);
    setUser({ ...user, [event.target.name]: event.target.value });
    // this.setState({
    //   [event.target.name]: event.target.value,
    // });
  };

  const handleSubmit = (event) => {
    // console.log('form submitted');
    // console.log(event);

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
        // console.log('registration res', response);
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
