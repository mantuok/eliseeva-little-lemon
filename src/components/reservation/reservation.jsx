import React from 'react';
import {useSelector} from 'react-redux';
import FormStepOne from '../form-step-one/form-step-one';
import FormStepTwo from '../form-step-two/form-step-two';
import {ReservationStep} from '../../const';

const Reservation = () => {
  const currentStep = useSelector((state) => state.currentStep);

  const renderStep = () => {
    if (currentStep === ReservationStep.StepOne) {
      return <FormStepOne />
    } else if (currentStep === ReservationStep.StepTwo) {
      return <FormStepTwo />
    } else {
      return <section className="page-in-progress">Sorry, page in progress...</section>
    }
  }
  return (
    <section className="reservation">
      <h3 className="reservation__heading">Fill out the form to make a reservation</h3>
      {renderStep()}
    </section>
  )
}

export default Reservation;