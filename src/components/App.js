import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Home from './Home';
import Dashboard from './Dashboard';

const App = () => {
  const [loggedInfo, setloggInStatus] = useState({
    loggedInStatus: 'NOT_LOGGED_IN',
    user: {},
  });
  // this.state = {
  //   loggedInStatus: 'NOT_LOGGED_IN',
  //   user: {},
  // };
  // this.handleLogin = this.handleLogin.bind(this);
  // this.handleLogout = this.handleLogout.bind(this);

  const checkLoginStatus = () => {
    axios
      .get('http://localhost:3001/logged_in', { withCredentials: true })
      .then((response) => {
        // console.log('logged in ?', response);
        if (
          response.data.logged_in === true &&
          loggedInfo.loggedInStatus === 'NOT_LOGGED_IN'
        ) {
          setloggInStatus({
            loggedInStatus: 'LOGGED_IN',
            user: response.data.user,
          });
        } else if (
          !response.data.logged_in &&
          loggedInfo.loggedInStatus === 'LOGGED_IN'
        ) {
          setloggInStatus({
            loggedInStatus: 'NOT_LOGGED_IN',
            user: {},
          });
        }
      })
      .catch((error) => {
        console.log('check login error', error);
      });
  };

  useEffect(() => {
    checkLoginStatus();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // componentDidMount() {
  //   this.checkLoginStatus();
  // }

  const handleLogout = () => {
    setloggInStatus({
      loggedInStatus: 'NOT_LOGGED_IN',
      user: {},
    });
  };

  const handleLogin = (data) => {
    setloggInStatus({
      loggedInStatus: 'LOGGED_IN',
      user: data.user.email,
    });
  };

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
                handleLogin={handleLogin}
                handleLogout={handleLogout}
                loggedInStatus={loggedInfo.loggedInStatus}
                user={loggedInfo.user.email}
              />
            )}
          />
          <Route
            exact
            path={'/dashboard'}
            render={(props) => (
              <Dashboard
                {...props}
                loggedInStatus={loggedInfo.loggedInStatus}
                user={loggedInfo.user.email}
              />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
};
export default App;
