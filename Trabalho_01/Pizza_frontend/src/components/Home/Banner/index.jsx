import React from 'react';
import './styles.css';
import bannerImg from './banner.png';
import Logo from '../../common/Logo';
import { Link } from 'react-router-dom';

const Banner = ({ handleScrollMenu }) => (
  <header>
    <div className='header-content'>
      <Logo />
      <div className='content-main'>
        <h1>Para atender a todos os paladares, temos pizzas doces e salgadas.</h1>
        <p>Pizzas de vários sabores para todos os tipos de gosto, venha experimentar !</p>
        <button onClick={handleScrollMenu}>
          Ver Menu <i className='fas fa-long-arrow-alt-right'></i>
        </button>
        <Link to="/login">
          <button >
            Realizar Login <i className='fas fa-long-arrow-alt-right'></i>
          </button>
        </Link>
      </div>
    </div>
    <img className='header-img' src={bannerImg} alt='banner' />
  </header>
);

export default Banner;
