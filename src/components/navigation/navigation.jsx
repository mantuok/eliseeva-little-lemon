import React from 'react';

const NavigationList = {
  Home: {
    id: 1,
    name: 'Home',
    link: '#'
  },
  About: {
    id: 2,
    name: 'About',
    link: '#'
  },
  Menu: {
    id: 3,
    name: 'Menu',
    link: '#'
  },
  Reservation: {
    id: 4,
    name: 'Reservation',
    link: '#'
  },
  Order: {
    id: 5,
    name: 'Order online',
    link: '#'
  },
  Login: {
    id: 6,
    name: 'Login',
    link: '#'
  }
};

const Navigation = () => {
  const navigationItems = Object.values(NavigationList);
  
  const renderNavigationItems = () => {
    return navigationItems.map((item) => {
    return <li href={item.link}><a>{item.name}</a></li>
    })
  };

  return (
    <nav>
      <ul>
        {renderNavigationItems()}
      </ul>
    </nav>
  )
}

export default Navigation;