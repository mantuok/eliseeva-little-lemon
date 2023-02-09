import React from 'react';
import {NavLink} from 'react-router-dom';
import {
  NavigationItem
} from '../../const';

const NavigationList = (props) => {
  const {type} = props;
  const navigationItems = Object.values(NavigationItem);

  const activeStyle = {
    textDecoration: "underline",
  };

  const renderNavigationItems = () => {
    return navigationItems.map((item) => {
    return (
      <li key={item.id}>
        <NavLink 
          to={item.link}
          style={({ isActive }) =>
            isActive ? activeStyle : undefined
          }
        >
          {item.name}
        </NavLink>
      </li>
    )})
  };

  return (
    <ul className={type.class}>
      {renderNavigationItems()}
    </ul>
  )
}

export default NavigationList;