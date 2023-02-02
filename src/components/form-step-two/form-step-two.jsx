import React from 'react';

const FormStepTwo = () => {
  return (
    <form form__step2>
      <label>
        First Name
        <span className="visually-hidden">Mandatory field</span>
        <input />
      </label>
      <label>
        Last Name
        <span className="visually-hidden">Mandatory field</span>
        <input />
      </label>
      <label>
        Comment
        <textarea />
      </label>
      <button className="button button--submit">Submit</button>
    </form>
  )
}

export default FormStepTwo;