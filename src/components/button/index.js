import React from 'react';
import PropTypes from 'prop-types';

import style from './button.module.scss';

export const ButtonTypes = {
  primary: style.primary,
  default: style.default 
};

const Button = ({ children, type }) => (
  <button className={type}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string
};

Button.defaultProps = {
  type: ButtonTypes.default
};

export default Button;
