import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import TimePicker from 'react-time-picker';
import Select from 'react-select'
import "react-datepicker/dist/react-datepicker.css";
import {Occasion} from '../../const';

const FormStepOne = () => {
  const [startdate, setStartDate] = useState(new Date());
  const occasionList = Object.values(Occasion);

  return (
    <form form__step1>
      <label>
        Select date
        <span className="visually-hidden">Mandatory field</span>
        <DatePicker selected={startdate} onChange={(date) => setStartDate(date)} />
      </label>
      <label>
        Select time
        <span className="visually-hidden">Mandatory field</span>
        <TimePicker />
      </label>
      <label>
        Select occasion
        <Select options={occasionList} />
      </label>
      <fieldset>
        <legend>Select number of guests</legend>
        <input type="radio" id="one-two" name="guests" value="one-two" checked />
        <label htmlFor="one-two">1 - 2</label>
        <input type="radio" id="three-six" name="guests" value="three-six" />
        <label htmlFor="one-two">3 - 6</label>
        <input type="radio" id="more-than-six" name="guests" value="more-than-six" />
        <label htmlFor="one-two">more than 6</label>
      </fieldset>
      <button className="button button--next">Next</button>
    </form>
  )
}

export default FormStepOne;