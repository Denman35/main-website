import React from 'react';
import Link from 'gatsby-link';

import menuIcon from 'assets/menuIcon.svg';

import style from './style.module.scss';

const Nav = ({ siteTitle }) => (
  <div className={style.navigation}>
    <h1 className={style.title}>
      <Link to="/">{siteTitle}</Link>
    </h1>
    <div className={style.linkWrapper}>
      <Link to="/portfolio/">Portfolio</Link>
      <Link to="/about/">About</Link>
      <Link to="/contact/">Contact</Link>
    </div>
    <div className={style.menuIcon}>
      <img src={menuIcon} alt="Menu Icon" />
    </div>
  </div>
);

export default Nav;
