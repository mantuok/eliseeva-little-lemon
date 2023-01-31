import React from 'react';
import ReservationForm from '../reservation-form/reservation-form';

const Reservation = () => {
  return (
    <section className="reservation">
      <h3 className="reservation__heading">Fill out the form to make a reservation</h3>
      <ReservationForm />
    </section>
  )
}

export default Reservation;