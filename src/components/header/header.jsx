import React from 'react';
import Navigation from '../navigation/navigation';
import {NavigationType} from '../../const';

const Header = () => {
  return (
    <header className="header">
      <img className="logo" src='../img/logo-color.png' alt='Little Lemon Restaurant' />
      <Navigation type={NavigationType.Header} />
    </header>
  )
}

export default Header;