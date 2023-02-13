import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {ActionCreator} from '../../store/action';
import DatePicker from 'react-datepicker';
import {addDays, setHours, setMinutes} from 'date-fns';
import Select from 'react-select'
import "react-datepicker/dist/react-datepicker.css";
import {
  Occasion,
  ReservationStep
} from '../../const';
import MandatoryHint from '../mandatory-hint/mandatory-hint';

const FormStepOne = () => {
  const dispatch = useDispatch();
  const [startdate, setStartDate] = useState();
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    occasion: '',
    guests: 'one-two'
  });
  const occasionList = Object.values(Occasion.options);

  const handleNextButtonClick = () => {
    dispatch(ActionCreator.setCurrentStep(ReservationStep.StepTwo))
  };

  // const handleDateChange = (data, evt) => {
  //   console.log(evt)
  //   const name = evt.target.id;
  //   setFormData({
  //     ...formData,
  //     [name]: data
  //   })
  // };

  return (
    <form className="form">
      <h3 className="form__heading">Step 1 - Enter dinner details</h3>
      <div className="form__wrapper">
        <label className="form__field form__field--datepicker">
          <span className="form__label form__label--datepicker">Select date</span>
          <span className="form__asterisk form__asterisk--datepicker visually-hidden">Mandatory field</span>
          <DatePicker 
            portalId="root-portal"
            id="date"
            className="form__datepicker"
            placeholderText="Date"
            selected={formData.date} 
            onChange={(date) => setFormData({
              ...formData,
              date: date
            })}
            minDate={new Date()}
            maxDate={addDays(new Date(), 30)}
          />
        </label>
        <label className="form__field form__field--timepicker">
          <span className="form__label form__label--timepicker">Select time</span>
          <span className="visually-hidden">Mandatory field</span>
          <DatePicker
            portalId="root-portal"
            className="form__timepicker"
            placeholderText="Time"
            selected={formData.time}
            onChange={(date) => setFormData({
              ...formData,
              time: date
            })}
            showTimeSelect
            showTimeSelectOnly
            dateFormat="h:mm aa"
            timeIntervals={30}
            minTime={setHours(setMinutes(new Date(), 0), 9)}
            maxTime={setHours(setMinutes(new Date(), 0), 23)}
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
            onChange={(evt) => setFormData({
              ...formData,
              occasion: evt.value
            })}
          />
        </label>
        <fieldset className="form__field form__field--radio">
          <legend className="form__label form__label--radio">Select number of guests</legend>
          <label htmlFor="one-two">
            <input 
              className="form__radio__input" 
              type="radio" 
              id="one-two" 
              name="guests" 
              value="one-two" 
              onChange={(evt) => setFormData({
                ...formData,
                guests: evt.target.value
              })
            }
              checked={formData.guests === "one-two"}
            />
            <span className="form__radio__label">1 - 2</span>
          </label>
          <label htmlFor="three-six">
            <input 
              className="form__radio__input" 
              type="radio" 
              id="three-six" 
              name="guests" 
              value="three-six" 
              onChange={(evt) => setFormData({
                ...formData,
                guests: evt.target.value
              })}
              checked={formData.guests === "three-six"}
            />
            <span className="form__radio__label">3 - 6</span>
          </label>
          <label htmlFor="more-than-six">
            <input 
              className="form__radio__input" 
              type="radio" 
              id="more-than-six" 
              name="guests" 
              value="more-than-six" 
              onChange={(evt) => setFormData({
                ...formData,
                guests: evt.target.value
              })}
              checked={formData.guests === "more-than-six"}
            />
            <span className="form__radio__label">more than 6</span>
          </label>
        </fieldset>
        <MandatoryHint />
      </div>
      <div className="button__wrapper">
        <button 
          className="button button--next"
          onClick={handleNextButtonClick}
        >
          Next
        </button>
      </div>
    </form>
  )
}

export default FormStepOne;