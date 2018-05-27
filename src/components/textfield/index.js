import React from 'react';
import PropTypes from 'prop-types';

import style from './textfield.module.scss';

const TextField = ({ label, placeholder, onChange, onClick, disabled, expanding, type }) => (
  <div className={style.container}>
    {label && <span className={style.label}>{label}</span>}
    <input
      className={expanding ? style.expandingTextfield : style.textfield}
      type={type}
      disabled={disabled}
      placeholder={placeholder}
      onChange={onChange}
      onClick={onClick}
    />
  </div>
);

TextField.propTypes = {
  label: PropTypes.node,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  expanding: PropTypes.bool,
  type: PropTypes.string
};

TextField.defaultProps = {
  label: undefined,
  placeholder: '',
  onChanged: undefined,
  onClick: undefined,
  disabled: false,
  expanding: false,
  type: 'text'
};

export default TextField;
