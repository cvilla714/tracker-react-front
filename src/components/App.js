import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import NavigationBar from './Navbar';
import Home from './Home';
import Dashboard from './Dashboard';
import Registration from '../containers/auth/Registration';
import Login from '../containers/auth/Login';

const App = () => {
  const [loggedInfo, setloggInStatus] = useState({
    loggedInStatus: 'NOT_LOGGED_IN',
    user: {},
  });

  const checkLoginStatus = () => {
    axios
      .get('http://localhost:3001/logged_in', { withCredentials: true })
      .then((response) => {
        if (
          response.data.logged_in === true &&
          loggedInfo.loggedInStatus === 'NOT_LOGGED_IN'
        ) {
          setloggInStatus({
            loggedInStatus: 'LOGGED_IN',
            user: response.data.user,
          });
          console.log(response.data.user);
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
        <NavigationBar useremail={loggedInfo.user.email} />
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
              />
            )}
          />
          <Route exact path={'/register'} component={Registration} />
          <Route exact path={'/login'} component={Login} />
        </Switch>
      </Router>
    </div>
  );
};
export default App;
