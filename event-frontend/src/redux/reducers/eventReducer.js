import { eventAPI } from 'api';
import { stopSubmit } from 'redux-form';

// Constants
const SET_USER_DATA = 'event-frontend/eventReducer/SET_USER_DATA';
//------------

// InitialState
const initialState = {
  firstName: null,
  lastName: null,
  email: null,
  eventDate: null,
  isRegistered: false
};
//------------

// Dispatch Actions
const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.payload
      };
    }
    default:
      return state;
  }
};
//------------

// Action Creators
export const setUserData = (
  firstName,
  lastName,
  email,
  eventDate,
  isRegistered
) => ({
  type: SET_USER_DATA,
  payload: { firstName, lastName, email, eventDate, isRegistered }
});
//------------

// Thunk Creators
export const addUserData = (
  firstName,
  lastName,
  email,
  eventDate
) => async dispatch => {
  const response = await eventAPI.saveUser(
    firstName,
    lastName,
    email,
    eventDate
  );
  if (response) {
    dispatch(setUserData(firstName, lastName, email, eventDate, true));
  } else {
    dispatch(stopSubmit('event', { _error: response.messages }));
  }
};
//------------

export default eventReducer;
