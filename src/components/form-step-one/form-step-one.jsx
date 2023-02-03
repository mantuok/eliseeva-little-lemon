import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import TimePicker from 'react-time-picker';
import Select from 'react-select'
import "react-datepicker/dist/react-datepicker.css";
import {Occasion} from '../../const';

const FormStepOne = () => {
  const [startdate, setStartDate] = useState();
  const occasionList = Object.values(Occasion.options);

  return (
    <form className="form">
      <h3 className="form__heading">Step 1 - Enter dinner details</h3>
      <label className="form__field">
        <span className="form__label form__label--datepicker">Select date</span>
        <span className="form__asterisk form__asterisk--datepicker visually-hidden">Mandatory field</span>
        <DatePicker 
          portalId="root-portal"
          className="form__datepicker"
          placeholderText="Date"
          selected={startdate} 
          onChange={(date) => setStartDate(date)} 
        />
      </label>
      <label className="form__field">
        <span className="form__label form__label--timepicker">Select time</span>
        <span className="visually-hidden">Mandatory field</span>
        <TimePicker
          className="form__timepicker"
          clearIcon={null}
          clockIcon={null}
          format="hh:mm a"
          disableClock={true}
          hourPlaceholder="Hours "
          minutePlaceholder=" Minutes"
        />
      </label>
      <label className="form__field">
        <span className="form__label">Select occasion</span>
        <Select 
          className="form__select"
          classNamePrefix="react-select"
          options={occasionList} 
          unstyled={true}
          placeholder={Occasion.default.label}
        />
      </label>
      <fieldset className="form__field">
        <legend className="form__label">Select number of guests</legend>
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