import React from 'react';
import PropTypes from 'prop-types';

import style from './button.module.scss';

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
  type: style.default 
};

export const PrimaryButton = props => (
  <Button {...props} type={style.primary} />
);

export default Button;
