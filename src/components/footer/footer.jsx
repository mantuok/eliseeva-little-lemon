import React from 'react';
import Navigation from '../navigation/navigation';
import {NavigationType} from '../../const';

const Footer = () => {
  return (
    <footer className="footer">
      <img className="logo" src='../img/logo-white.png' alt='Little Lemon Restaurant' />
      <Navigation type={NavigationType.Footer}/>
    </footer>
  )
}

export default Footer;