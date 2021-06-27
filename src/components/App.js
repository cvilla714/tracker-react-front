import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Home from './Home';
import Dashboard from './Dashboard';

class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: 'NOT_LOGGED_IN',
      user: {},
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  checkLoginStatus() {
    axios
      .get('http://localhost:3001/logged_in', { withCredentials: true })
      .then((response) => {
        console.log('logged in ?', response);
      })
      .catch((error) => {
        console.log('check login error', error);
      });
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus: 'LOGGED_IN',
      user: data.user,
    });
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route
              exact
              path={'/'}
              render={(props) => (
                <Home
                  {...props}
                  handleLogin={this.handleLogin}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />
            <Route
              exact
              path={'/dashboard'}
              render={(props) => (
                <Dashboard
                  {...props}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
