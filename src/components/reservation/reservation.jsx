import React from 'react';
import FormStepOne from '../form-step-one/form-step-one';
import FormStepTwo from '../form-step-two/form-step-two';

const Reservation = () => {
  return (
    <section className="reservation">
      <h3 className="reservation__heading">Fill out the form to make a reservation</h3>
      <FormStepOne />
      <FormStepTwo />
    </section>
  )
}

export default Reservation;