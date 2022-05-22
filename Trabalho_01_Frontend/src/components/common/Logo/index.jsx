import React from 'react';
import logo from './logo.png';
import './styles.css';
import { Link } from 'react-router-dom';

const Logo = () => (
  <div className='header-content_logo'>
    <div>
      <img src={logo} alt='logo' />
      <span>
        <Link to="/">Gusto Pizzaria</Link>
      </span>
    </div>

    <p>
      <b>Seja bem vindo!</b>
    </p>
  </div>
);

export default Logo;
