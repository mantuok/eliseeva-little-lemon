import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  ReservationStep,
} from '../../const';
import { ActionCreator } from '../../store/action';

const FormConfirmation = () => {
  const dispatch = useDispatch();
  const firstName = useSelector((state) => state.firstName);
  const lastName = useSelector((state) => state.lastName);

  const handleCloseButtonClick = () => {
    dispatch(ActionCreator.clearData());
    dispatch(ActionCreator.setCurrentStep(ReservationStep.StepOne));
  };

  return (
    <div>
      <section className="form__confirmation">
        Dear {firstName} {lastName}, thank you for your resevation.
      </section>
      <div className="button__wrapper">
        <button 
          className="button"
          onClick={handleCloseButtonClick}
        >
          Close
        </button>
      </div>
    </div>

  );
}

export default FormConfirmation;