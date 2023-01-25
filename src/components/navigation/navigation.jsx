import React, {useState} from 'react';
import {useMediaQuery} from 'react-responsive';
import {
  NavigationList,
  Viewport,
  MenuButton
} from '../../const';

const Navigation = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigationItems = Object.values(NavigationList);

  const handleMenuButtonClick = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  }

  const renderNavigationItems = () => {
    return navigationItems.map((item) => {
    return <li key={item.id}><a href={item.link}>{item.name}</a></li>
    })
  };

  const isMobile = useMediaQuery({query: `(max-width: ${Viewport.Mobile.max})`});

  const renderMenuButton = (menuButton) => {
    return (
      <button 
        className={menuButton.class}
        onClick={handleMenuButtonClick}
      >
        <span className="visually-hidden">{menuButton.text}</span>
      </button>
    )
  };

  const renderNavigationList = () => {
    return (
      <ul className="navigation">
        {renderNavigationItems()}
      </ul>
    )
  }

  return (
    <nav>
      {isMobile && renderMenuButton(MenuButton.Closed)}
      {isMobileMenuOpen && renderNavigationList()}
    </nav>
  )
}

export default Navigation;