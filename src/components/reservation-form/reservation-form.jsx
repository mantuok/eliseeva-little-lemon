import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import TimePicker from 'react-time-picker';
import Select from 'react-select'
import "react-datepicker/dist/react-datepicker.css";

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const ReservationForm = () => {
  const [startdate, setStartDate] = useState(new Date());

  return (
    <div className="reservation-form">
      <h3 className="reservation__heading">Step 1 - Enter dinner details</h3>
      <form>
        <DatePicker selected={startdate} onChange={(date) => setStartDate(date)} />
        <TimePicker />
        <Select options={options} />
      </form>
    </div>
  )
}

export default ReservationForm;