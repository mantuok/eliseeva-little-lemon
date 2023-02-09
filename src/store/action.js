export const ActionType = {
  SET_DINNER_DATA: 'data/setDinnerData',
  SET_CONTACT_DATA: ' data/setContactData',
  CLEAR_DATA: 'data/clearData',
  SET_CURRENT_STEP: 'step/setCurrentStep'
};

export const ActionCreator =  {
  setDinnerData: (dinnerData) => ({
    type: ActionType.SET_DINNER_DATA,
    payload: dinnerData
  }),
  setContactData: (contactData) => ({
    type: ActionType.SET_CONTACT_DATA,
    payload: contactData
  }),
  clearData: () => ({
    type: ActionType.CLEAR_DATA
  }),
  setCurrentStep: (step) => ({
    type: ActionType.SET_CURRENT_STEP,
    payload: step
  })
};