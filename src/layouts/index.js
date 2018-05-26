import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Nav from '../components/nav';
import './index.css';

const Layout = ({ children, data }) => (
  <div>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Denman35</title>
        <link href="https://fonts.googleapis.com/css?family=PT+Sans:400,700" rel="stylesheet" />
    </Helmet>
    <Nav siteTitle="DENMAN35" />
      {children()}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
