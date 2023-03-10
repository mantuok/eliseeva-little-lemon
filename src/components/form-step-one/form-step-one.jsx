import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ActionCreator} from '../../store/action';
import DatePicker from 'react-datepicker';
import {addDays} from 'date-fns';
import classNames from 'classnames';
import Select from 'react-select'
import "react-datepicker/dist/react-datepicker.css";
import {
  Occasion,
  ReservationStep,
  GuestNumber
} from '../../const';
import MandatoryHint from '../mandatory-hint/mandatory-hint';
import TimeOptions from '../time-options/time-options';
import {fetchAPI} from '../../utils/api';

const FormStepOne = () => {
  const dispatch = useDispatch();
  const storedDate = useSelector((state) => state.date);
  const storedTime = useSelector((state) => state.time);
  const storedOccasion = useSelector((state) => state.occasion);
  const storedGuests = useSelector((state) => state.guests);
  const reservations = useSelector((state) => state.reservations);
  const [formData, setFormData] = useState({
    date: storedDate,
    time: storedTime,
    occasion: storedOccasion,
    guests: storedGuests,
  });
  const [times, setTimes] = useState([]);
  const [validStatus, setValidStatus] = useState({
    date: formData.date ? true : null,
    time: formData.time ? true : null
  });
  const occasionList = Object.values(Occasion.options);

  useEffect(() => {
    setTimes(fetchAPI(new Date(formData.date)));
  }, [formData.date]);

  const timepickerClass = classNames("form__timepicker", {"form__field--invalid": validStatus.time === false});
  const datepickerClass = classNames("form__datepicker", {"form__field--invalid": validStatus.date === false});

  const handleNextButtonClick = () => {
    dispatch(ActionCreator.setDinnerData(formData));
    dispatch(ActionCreator.setCurrentStep(ReservationStep.StepTwo));
  };

  const handleOnBlur = (type) => {
    if (!formData[type]) {
      setValidStatus({
        ...validStatus,
        [type]: false
      })
    } else {
      setValidStatus({
        ...validStatus,
        [type]: true
      })
    }
  };

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
            className={datepickerClass}
            placeholderText="Date"
            dateFormat="yyyy/MM/dd"
            selected={formData.date} 
            onChange={(date) => {
              setFormData({
                ...formData,
                date: date
              })
              setValidStatus({
                ...validStatus,
                date: true
              })
            }}
            onBlur={() => handleOnBlur("date")}
            minDate={new Date()}
            maxDate={addDays(new Date(), 30)}
          />
        </label>
        <label className="form__field form__field--timepicker">
          <span className="form__label form__label--timepicker">Select time</span>
          <span className="visually-hidden">Mandatory field</span>
          <select 
            className={timepickerClass}
            value={formData.time}
            onChange={(evt) => {
                setFormData({
                  ...formData,
                  time: evt.target.value
                })
                setValidStatus({
                  ...validStatus,
                  time: true
                })
              }
            }>
            <TimeOptions date={formData.date} reservations={reservations} times={times} />
          </select>
        </label>
        <label className="form__field">
          <span className="form__label">Select occasion</span>
          <Select 
            className="form__select"
            classNamePrefix="react-select"
            options={occasionList} 
            unstyled={true}
            value={{label: formData.occasion}}
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
              checked={formData.guests === GuestNumber.oneTwo}
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
              checked={formData.guests === GuestNumber.threeSix}
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
              checked={formData.guests === GuestNumber.moreThanSix}
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
          disabled={!validStatus.date || !validStatus.time}
          aria-label="Next"
        >
          Next
        </button>
      </div>
    </form>
  )
}

export default FormStepOne;