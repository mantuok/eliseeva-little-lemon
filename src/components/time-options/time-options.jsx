import React from 'react';
import {
  Times
} from '../../const';

const TimeOptions = (props) => {
  const {date, reservations, times} = props;

  const renderSelectOptions = () => {
    // return Times.map((time) => {
    //   if (reservations.includes(date + time)) {
    //     return ''
    //   } else {
    //     return <option key={time} value={time}>{time}</option>
    //   }
    // })
    return times.map((time) => {
      if (reservations.includes(date + time)) {
        return ''
      } else {
        return <option key={time} value={time}>{time}</option>
      }
    })
  };

  return (
    <React.Fragment>
      <option value="" disabled hidden>Time</option>
      {renderSelectOptions()}
    </React.Fragment>
  );
}

export default TimeOptions;