import React from 'react';
import NavigationList from '../navigation-list/navigation-list';
import { NavigationType } from '../../const';

const NavigationFooter = () => {
  return (
    <nav>
      <NavigationList type={NavigationType.Footer} />
    </nav>
  )
}

export default NavigationFooter;