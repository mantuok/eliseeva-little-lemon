import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ActionCreator} from '../../store/action';
import MandatoryHint from '../mandatory-hint/mandatory-hint';
import { PatternFormat } from 'react-number-format';
import classNames from 'classnames';
import {submitAPI} from '../../utils/api'
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
  const [validStatus, setValidStatus] = useState({
    firstName: formData.firstName ? true : null,
    lastName: formData.lastName ? true : null,
    phone: formData.phone ? true : null,
  });

  const firstNameClass = classNames("form__first-name", {"form__field--invalid": validStatus.firstName === false});
  const lastNameClass = classNames("form__last-name", {"form__field--invalid": validStatus.lastName === false});
  const phoneClass = classNames("form__phone-number", {"form__field--invalid": validStatus.phone === false});

  const handleBackButtonClick = () => {
    dispatch(ActionCreator.setContactData(formData));
    dispatch(ActionCreator.setCurrentStep(ReservationStep.StepOne))
  };

  const handleSubmitButtonClick = (evt) => {
    evt.preventDefault();
    dispatch(ActionCreator.setContactData(formData));
    if (submitAPI()) {
      dispatch(ActionCreator.setCurrentStep(ReservationStep.Confirmation));
      dispatch(ActionCreator.setReservation());
    }
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

  const handlePhoneBlur = () => {
    if (/[0-9]{3}-[0-9]{3}-[0-9]{4}/.test(formData.phone)) {
      setValidStatus({
        ...validStatus,
        phone: true
      })
    } else {
      setValidStatus({
        ...validStatus,
        phone: false
      })
    }
  };

  return (
    <form className="form">
      <h3 className="form__heading">Step 2 - Enter contact details</h3>
      <div className="form__wrapper">
        <label className="form__field">
          <span className="form__label form-label--first-name">First Name</span>
          <span className="visually-hidden">Mandatory field</span>
          <input
            className={firstNameClass}
            placeholder="Enter first name..."
            value={formData.firstName}
            onChange={(evt) => { 
              setFormData({
                ...formData,
                firstName: evt.target.value
              })
              setValidStatus({
                ...validStatus,
                firstName: true
              })
          }}
            onBlur={() => handleOnBlur("firstName")}
          />
        </label>
        <label className="form__field">
          <span className="form__label form-label--last-name">Last Name</span>
          <span className="visually-hidden">Mandatory field</span>
          <input
            className={lastNameClass}
            placeholder="Enter last name..."
            value={formData.lastName}
            onChange={(evt) => { 
                setFormData({
                  ...formData,
                  lastName: evt.target.value
                })
                setValidStatus({
                  ...validStatus,
                  lastName: true
                })
            }}
            onBlur={() => handleOnBlur("lastName")}
          />
        </label>
        <label className="form__field">
          <span className="form__label form-label--phone-number">Phone number</span>
          <span className="visually-hidden">Mandatory field</span>
          <PatternFormat
            className={phoneClass}
            placeholder="Enter phone number..."
            format="###-###-####"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            mask="#"
            value={formData.phone}
            onChange={(evt) => { 
              setFormData({
                ...formData,
                phone: evt.target.value
              })
            }}
            onBlur={handlePhoneBlur}
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
          disabled={!validStatus.firstName || !validStatus.lastName || !validStatus.phone}
        >
          Submit
        </button>
      </div>
    </form>
  )
}

export default FormStepTwo;