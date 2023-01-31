import React from 'react';
import NavigationHeader from '../navigation-header/navigation-header';

const Header = () => {
  return (
    <header className="header">
      <img className="logo logo__header" src='../img/logo-color.png' alt='Little Lemon Restaurant' />
      <NavigationHeader />
    </header>
  )
}

export default Header;