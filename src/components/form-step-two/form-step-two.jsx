import React from 'react';

const FormStepTwo = () => {
  return (
    <form className="form">
      <h3 className="form__heading">Step 2 - Enter contact details</h3>
      <label className="form__field">
        <span className="form__label">First Name</span>
        <span className="visually-hidden">Mandatory field</span>
        <input />
      </label>
      <label className="form__field">
        <span className="form__label">Last Name</span>
        <span className="visually-hidden">Mandatory field</span>
        <input />
      </label>
      <label className="form__field">
        <span className="form__label">Comment</span>
        <textarea />
      </label>
      <button className="button button--submit">Submit</button>
    </form>
  )
}

export default FormStepTwo;