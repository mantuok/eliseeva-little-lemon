import React from 'react';

const MandatoryHint = () => {
  return (
    <div className="mandatory-hint">
      <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.95406 10.1378L9.00818 8.66176L6.59736 5.96804L10.2013 5.26693L9.45099 2.85611L6.03155 4.36902L6.44976 0.666687H3.94053L4.35874 4.36902L0.939301 2.85611L0.201294 5.26693L3.79293 5.96804L1.38211 8.66176L3.44853 10.1378L5.19514 6.93975L6.95406 10.1378Z" fill="#495E57"/>
      </svg>
      <span> - mandatory fields</span>
    </div>
  )
}

export default MandatoryHint;