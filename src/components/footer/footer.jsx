import React from 'react';
import NavigationFooter from '../navigation-footer/navigation-footer';
import Contacts from '../contacts/contacts';

const Footer = () => {
  return (
    <footer className="footer">
      <img className="logo" src='../img/logo-white.png' alt='Little Lemon Restaurant' />
      <NavigationFooter />
      <Contacts />
    </footer>
  )
}

export default Footer;