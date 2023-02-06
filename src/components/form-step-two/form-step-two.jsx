import React from 'react';
import MandatoryHint from '../mandatory-hint/mandatory-hint';
import { PatternFormat } from 'react-number-format';

const FormStepTwo = () => {
  return (
    <form className="form">
      <h3 className="form__heading">Step 2 - Enter contact details</h3>
      <div className="form__wrapper">
        <label className="form__field">
          <span className="form__label form-label--first-name">First Name</span>
          <span className="visually-hidden">Mandatory field</span>
          <input className="form__first-name" placeholder="Enter first name..." />
        </label>
        <label className="form__field">
          <span className="form__label form-label--last-name">Last Name</span>
          <span className="visually-hidden">Mandatory field</span>
          <input className="form__last-name" placeholder="Enter last name..." />
        </label>
        <label className="form__field">
          <span className="form__label form-label--phone-number">Phone number</span>
          <span className="visually-hidden">Mandatory field</span>
          <PatternFormat 
            className="form__phone-number" 
            name=""  
            placeholder="Enter phone number..." 
            id=""
            format="###-###-####"
            pattern="[+]{1}[0-9]{1} [0-9]{3}-[0-9]{3}-[0-9]{4}"
            mask="_"
            required
          />
        </label>
        <label className="form__field">
          <span className="form__label">Comment</span>
          <textarea className="form__textarea" rows="5" />
        </label>
        <MandatoryHint />
      </div>
      <div className="button__wrapper">
        <button className="button button--back">Back</button>
        <button className="button button--submit">Submit</button>
      </div>
    </form>
  )
}

export default FormStepTwo;