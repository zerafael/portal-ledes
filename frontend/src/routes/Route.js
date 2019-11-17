import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import DefaultLayout from '../pages/_layout/default';
import AuthLayout from '../pages/_layout/auth';

function RouteWrapper({ component: Component, isPrivate, ...rest }) {
  const signed = useSelector(state => state.auth.signed);
  const { path } = rest;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && path === '/admin') {
    return <Redirect to="/" />;
  }

  const Layout = path === '/admin' ? AuthLayout : DefaultLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};

export default RouteWrapper;
