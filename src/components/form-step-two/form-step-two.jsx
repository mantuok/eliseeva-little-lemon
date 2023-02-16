import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ActionCreator} from '../../store/action';
import MandatoryHint from '../mandatory-hint/mandatory-hint';
import { PatternFormat } from 'react-number-format';
import {
  ReservationStep
} from '../../const';

const FormStepTwo = () => {
  const dispatch = useDispatch();
  const storedFirstName = useSelector((state) => state.firstName);
  const storedLastName = useSelector((state) => state.lastName);
  const storedPhone = useSelector((state) => state.phone);
  const storedComment = useSelector((state) => state.storedComment);
  const [formData, setFormData] = useState({
    firstName: storedFirstName,
    lastName: storedLastName,
    phone: storedPhone,
    comment: storedComment
  });

  const handleBackButtonClick = () => {
    dispatch(ActionCreator.setCurrentStep(ReservationStep.StepOne))
  };

  const handleSubmitButtonClick = (evt) => {
    evt.preventDefault();
    dispatch(ActionCreator.setContactData(formData));
    dispatch(ActionCreator.setCurrentStep(ReservationStep.Confirmation));
    dispatch(ActionCreator.setReservation());

  };

  return (
    <form className="form">
      <h3 className="form__heading">Step 2 - Enter contact details</h3>
      <div className="form__wrapper">
        <label className="form__field">
          <span className="form__label form-label--first-name">First Name</span>
          <span className="visually-hidden">Mandatory field</span>
          <input
            className="form__first-name"
            placeholder="Enter first name..."
            value={formData.firstName}
            onChange={(evt) => setFormData({
              ...formData,
              firstName: evt.target.value
            })}
          />
        </label>
        <label className="form__field">
          <span className="form__label form-label--last-name">Last Name</span>
          <span className="visually-hidden">Mandatory field</span>
          <input
            className="form__last-name"
            placeholder="Enter last name..."
            value={formData.lastName}
            onChange={(evt) => setFormData({
              ...formData,
              lastName: evt.target.value
            })}
          />
        </label>
        <label className="form__field">
          <span className="form__label form-label--phone-number">Phone number</span>
          <span className="visually-hidden">Mandatory field</span>
          <PatternFormat
            className="form__phone-number"
            placeholder="Enter phone number..."
            format="###-###-####"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            mask="_"
            required
            value={formData.phone}
            onChange={(evt) => setFormData({
              ...formData,
              phone: evt.target.value
            })}
          />
        </label>
        <label className="form__field">
          <span className="form__label">Comment</span>
          <textarea 
            className="form__textarea" 
            rows="5" 
            value={formData.comment}
            onChange={(evt) => setFormData({
              ...formData,
              comment: evt.target.value
            })}
          />
        </label>
        <MandatoryHint />
      </div>
      <div className="button__wrapper">
        <button 
          className="button button--back"
          onClick={handleBackButtonClick}
        >
          Back
        </button>
        <button 
          className="button button--submit"
          onClick={handleSubmitButtonClick}
        >
          Submit
        </button>
      </div>
    </form>
  )
}

export default FormStepTwo;