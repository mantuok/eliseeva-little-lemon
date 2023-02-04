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
      <fieldset className="form__field form__field--radio">
        <legend className="form__label form__label--radio">Select number of guests</legend>
        <label htmlFor="one-two">
          <input className="form__radio__input" type="radio" id="one-two" name="guests" value="one-two" defaultChecked />
          <span className="form__radio__label">1 - 2</span>
        </label>
        <label htmlFor="three-six">
          <input className="form__radio__input" type="radio" id="three-six" name="guests" value="three-six" />
          <span className="form__radio__label">3 - 6</span>
        </label>
        <label htmlFor="more-than-six">
          <input className="form__radio__input" type="radio" id="more-than-six" name="guests" value="more-than-six" />
          <span className="form__radio__label">more than 6</span>
        </label>
      </fieldset>
      <button className="button button--next">Next</button>
    </form>
  )
}

export default FormStepOne;