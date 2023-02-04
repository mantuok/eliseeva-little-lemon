import React from 'react';
import MandatoryHint from '../mandatory-hint/mandatory-hint';

const FormStepTwo = () => {
  return (
    <form className="form">
      <h3 className="form__heading">Step 2 - Enter contact details</h3>
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
        <input className="form__phone-number" type="tel" />
      </label>
      <label className="form__field">
        <span className="form__label">Comment</span>
        <textarea />
      </label>
      <MandatoryHint />
      <button className="button button--back">Back</button>
      <button className="button button--submit">Submit</button>
    </form>
  )
}

export default FormStepTwo;