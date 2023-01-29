import React from 'react';
import {
  NavigationItem
} from '../../const';

const NavigationList = (props) => {
  const {type} = props;
  const navigationItems = Object.values(NavigationItem);

  const renderNavigationItems = () => {
    return navigationItems.map((item) => {
    return <li key={item.id}><a href={item.link}>{item.name}</a></li>
    })
  };

  return (
    <ul className={type.class}>
      {renderNavigationItems()}
    </ul>
  )
}

export default NavigationList;