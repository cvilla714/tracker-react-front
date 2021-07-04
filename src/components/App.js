import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NavigationBar from './Navbar';
import Home from './Home';
import Dashboard from './Dashboard';
import Registration from '../containers/auth/Registration';
import Login from '../containers/auth/Login';

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact path={'/'} render={(props) => <Home {...props} />} />
          <Route
            exact
            path={'/dashboard'}
            render={(props) => <Dashboard {...props} />}
          />
          <Route exact path={'/register'} component={Registration} />
          <Route exact path={'/login'} component={Login} />
        </Switch>
      </Router>
    </div>
  );
};
export default App;
