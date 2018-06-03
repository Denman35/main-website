import React from 'react';
import PropTypes from 'prop-types';

import style from './header.module.scss';

const Header = ({ children }) => (
  <div className={style.header}>
    {children}
  </div>
);

Header.propTypes = {
  children: PropTypes.node.isRequired
};

export default Header;
