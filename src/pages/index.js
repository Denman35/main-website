import React from 'react';
import Link from 'gatsby-link';

import style from './index.module.css';

const IndexPage = () => (
  <div className={style.backgroundImage}>
    <div className={style.overlay}>
      <div className={style.textCont}>
        <h1>Bold</h1>
        <h1>Innovative</h1>
        <h1>Design</h1>
        <button className={style.button}>Contact Us</button>
      </div>
    </div>
  </div>
)

export default IndexPage
