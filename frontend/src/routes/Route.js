import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import DefaultLayout from '../pages/_layout/default';

function RouteWrapper({ component: Component, isPrivate, ...rest }) {
  const signed = false;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  // TODO: Verificar se é a página de login
  const Layout = DefaultLayout;

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
