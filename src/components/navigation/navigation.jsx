import React, {useState} from 'react';
import {useMediaQuery} from 'react-responsive';
import {
  NavigationList,
  NavigationType,
  Viewport,
  MenuButton
} from '../../const';

const Navigation = (props) => {
  const {type} = props;
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

  const renderNavigationList = (type) => {
    return (
      <ul className={"navigation " + type.class}>
        {renderNavigationItems()}
      </ul>
    )
  }

  const renderSomething = () => {
    return (
      <button>Something</button>
    )
  }

  return (
    <nav>
      {(type.type === NavigationType.Header.type) && renderNavigationList(NavigationType.Header)}
      {(type.type === NavigationType.Footer.type) && renderNavigationList(NavigationType.Footer)}
      {renderMenuButton(MenuButton.Closed)}
      {isMobileMenuOpen && renderSomething()} 
    </nav>
  )
}

export default Navigation;