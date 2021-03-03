import React from 'react';
import classes from './Navbar.module.css';
import logo from '../../../Assets/images/cryptologo.png';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <div className={classes.NavbarMain}>
      <div className={classes.LogoArea}>
        <img src={logo} name='crypto-logo' alt='CryptoCurrency Logo' />
        <span>Crypto Currency</span>
      </div>
      <div className={classes.SearchArea}>Search Area</div>
      <div className={classes.MenuArea}>Menu Area</div>
    </div>
  );
};

export default Navbar;
