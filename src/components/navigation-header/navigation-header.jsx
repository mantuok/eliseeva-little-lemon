import React, {useState, useEffect} from 'react';
import {useMediaQuery} from 'react-responsive';
import {
  NavigationType,
  // NavigationList,
  Viewport,
  MenuButton
} from '../../const';
import NavigationList from '../navigation-list/navigation-list';

const NavigationHeader = (props) => {
  const {type} = props;
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  // const navigationItems = Object.values(NavigationList);

  const handleMenuButtonClick = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  }

  // const renderNavigationItems = () => {
  //   return navigationItems.map((item) => {
  //   return <li key={item.id}><a href={item.link}>{item.name}</a></li>
  //   })
  // };

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

  // const renderNavigationList = () => {
  //   return (
  //     <ul className={"navigation-header"}>
  //       {renderNavigationItems()}
  //     </ul>
  //   )
  // }

  useEffect(() => {
    if( isMobileMenuOpen) document.body.style.overflow = 'hidden';
    if (!isMobileMenuOpen) document.body.style.overflow = 'scroll';
  }, [isMobileMenuOpen])

  return (
    <nav>
      {/* {(!isMobile || isMobileMenuOpen) && renderNavigationList()} */}
      {(!isMobile || isMobileMenuOpen) && <NavigationList type={NavigationType.Header} />}
      {isMobile && !isMobileMenuOpen && renderMenuButton(MenuButton.Closed)}
      {isMobile && isMobileMenuOpen && renderMenuButton(MenuButton.Open)}
    </nav>
  )
}

export default NavigationHeader;