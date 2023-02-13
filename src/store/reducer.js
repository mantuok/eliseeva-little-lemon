import {ActionType} from './action';
import {ReservationStep} from  '../const';
import {Occasion} from '../const';

const initialState = {
  currentStep: ReservationStep.StepOne,
  date: '',
  time: '',
  occasion: Occasion.default.label,
  guests: '',
  fistName: '',
  lastName: '',
  phone: '',
  comment: '',
};

export const reducer =  (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CURRENT_STEP: 
      return {
        ...state,
        currentStep: action.payload
      }
    case ActionType.SET_DINNER_DATA:
      return {
        ...state,
        date: action.payload.date,
        time: action.payload.time,
        occasion: action.payload.occasion,
        guests: action.payload.guests,
      };
    case ActionType.SET_CONTACT_DATA:
      return {
        ...state,
        fistName: action.payload.fistName,
        lastName: action.payload.lastName,
        phone: action.payload.phone,
        comment: action.payload.comment,
      };
    case ActionType.CLEAR_DATA:
      return {
        ...state,
        date: '',
        time: '',
        occasion: '',
        guests: 0,
        fistName: '',
        lastName: '',
        phone: '',
        comment: '',
      };
    default:
      return state
  }
}

