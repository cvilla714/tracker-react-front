import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import { useGetLoginUserInfoQuery } from '../../features/user/statusSlice';
import Home from './Home';

const PrivateRoute = ({ isAuth, component: Component, ...rest }) => {
  // const { data } = useGetLoginUserInfoQuery();
  // const isAuth = data?.logged_in ? true : false;
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? (
          <Home />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
