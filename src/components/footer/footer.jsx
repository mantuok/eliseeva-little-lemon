import React from 'react';
import NavigationFooter from '../navigation-footer/navigation-footer';
import {NavigationType} from '../../const';

const Footer = () => {
  return (
    <footer className="footer">
      <img className="logo" src='../img/logo-white.png' alt='Little Lemon Restaurant' />
      <NavigationFooter />
    </footer>
  )
}

export default Footer;