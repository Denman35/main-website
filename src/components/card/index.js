import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';

import style from './card.module.scss';

const Card = ({ header, children, onClick }) => (
  <div className={style.card} onClick={onClick}>
    { header &&
      <Header>
        {header}
      </Header>
    }
    <div className={style.content}>
      {children}
    </div>
  </div>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.node,
  onClick: PropTypes.func
};

Card.defaultProps = {
  header: undefined,
  onClick: undefined
};

export default Card;
