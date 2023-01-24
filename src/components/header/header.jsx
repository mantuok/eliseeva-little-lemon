import React from 'react';
import Navigation from '../navigation/navigation';

const Header = () => {
  return (
    <header className="container">
      <img className="logo" src='../img/logo-color.png' alt='Little Lemon Restaurant' />
      <Navigation />
    </header>
  )
}

export default Header;