import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Dashboard from './Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route exact path={'/dashboard'} component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
