import React, {useState, useEffect} from 'react';
import {useMediaQuery} from 'react-responsive';
import {
  NavigationType,
  Viewport,
  MenuButton
} from '../../const';
import NavigationList from '../navigation-list/navigation-list';

const NavigationHeader = (props) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleMenuButtonClick = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  }

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

  useEffect(() => {
    if( isMobileMenuOpen) document.body.style.overflow = 'hidden';
    if (!isMobileMenuOpen) document.body.style.overflow = 'scroll';
  }, [isMobileMenuOpen])

  return (
    <nav>
      {(!isMobile || isMobileMenuOpen) && <NavigationList type={NavigationType.Header} />}
      {isMobile && !isMobileMenuOpen && renderMenuButton(MenuButton.Closed)}
      {isMobile && isMobileMenuOpen && renderMenuButton(MenuButton.Open)}
    </nav>
  )
}

export default NavigationHeader;