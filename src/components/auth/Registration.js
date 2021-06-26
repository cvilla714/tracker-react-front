import React, { Component } from 'react';
import axios from 'axios';

export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      password_confirmation: '',
      registrationErrors: '',
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

    const { email, password, password_confirmation } = this.state;

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
          this.props.handleSuccessfulAuth(response.data);
        }
      })
      .catch((error) => {
        console.log('registration error', error);
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

          <input
            type="password"
            name="password_confirmation"
            placeholder="Confirm Password"
            value={this.state.password_confirmation}
            onChange={this.handlChange}
            required
          />

          <button tupe="submit">Register</button>
        </form>
      </div>
    );
  }
}
