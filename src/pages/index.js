import React from 'react';
import Link from 'gatsby-link';
import anime from 'animejs';

import style from './index.module.scss';

class IndexPage extends React.Component {
  componentDidMount() {
    // Background Line animations
    const paths = document.querySelectorAll('path');
    paths.forEach(p => {
      const offset = anime.setDashoffset(p);
      const factor = offset / 1000;
      p.setAttribute('stroke-dashoffset', offset);
      anime({
        targets: p,
        strokeDashoffset: [offset, 0],
        duration: anime.random(6000, 9000) * factor,
        delay: anime.random(0, 9000),
        loop: true,
        direction: 'alternate',
        easing: 'easeInOutSine',
        autoplay: true,
      });
    });
  }

  render() {
    return (
      <div className={style.backgroundImage}>
        <div className={style.overlay}>
          <svg
            viewBox="0 0 1440 900"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={style.lines}
            preserveAspectRatio="xMidYMid slice"
          >
            <path d="M540.5 900V800.5L700 641V0" />
            <path d="M519.5 900V788.5L679.5 628.5V181.5" />
            <path d="M560 900V811.5L691.5 680H1100L1260 520V440" />
            <path d="M720 340V500L780 560V580H800L880 660H1092.5L1240 512.5V480" />
            <path d="M580 900V820.5L700 700.5H1109L1280 529.5V0" />
            <path d="M0 620H480L620 480H660" />
            <path d="M120 600H471.5L660 411.5V120" />
            <path d="M627 500L367 760H0" />
            <path d="M0 780H375.5L575.5 580H660" />
            <path d="M600 900V829L709 720H920L1040 840H1200" />
            <path d="M1399 900L1400 740H1380L1400 720L1399 360L1440 320" />
            <path d="M140 580H464L640 404V300L460 120" />
            <path d="M0 140H452L620 308V380" />
            <path d="M1440 292L1380 352V713.5L1300 793.5V900" />
            <path d="M1300 0V360L1340 320V0" />
            <path d="M740 440V492.5L887.5 640H1020L1040 620V420" />
            <path d="M1020 560V180L1200 0" />
            <path d="M320 160V300L400 380V560" />
            <path d="M420 560V370L340 290V160" />
            <path d="M360 160V283L440 363V560" />
          </svg>

          <div className={style.content}>
            <h1>Bold</h1>
            <h1>Innovative</h1>
            <h1>Design</h1>
            <button className={style.button}>Contact Us</button>
          </div>
        </div>
      </div>
    );
  }
}

export default IndexPage;
