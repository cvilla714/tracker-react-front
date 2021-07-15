import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Home from './Home';

const PrivateRoute = ({ isAuth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        isAuth ? (
          <Home />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        );
      }}
    />
  );
};

export default PrivateRoute;
