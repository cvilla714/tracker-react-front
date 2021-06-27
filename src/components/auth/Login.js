import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      loginErrors: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlChange = this.handlChange.bind(this);
  }

  handlChange(event) {
    // console.log('handle change', event);
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    // console.log('form submitted');
    // console.log(event);

    const { email, password } = this.state;

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
          this.props.handleSuccessfulAuth(response.data);
        }
      })
      .catch((error) => {
        console.log(' login error', error);
      });
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handlChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handlChange}
            required
          />

          <button tupe="submit">Login</button>
        </form>
      </div>
    );
  }
}
