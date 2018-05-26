import React from 'react';
import Link from 'gatsby-link';

import style from './style.module.css';

const Nav = ({ siteTitle }) => (
  <div className={style.navigation}>
    <h1 className={style.title}>{siteTitle}</h1>
    <div className={style.linkWrapper}>
      <Link to='/projects/'>Projects</Link>
      <Link to='/about/'>About</Link>
      <Link to='/contact/'>Contact</Link>
    </div>
  </div>
)

export default Nav
