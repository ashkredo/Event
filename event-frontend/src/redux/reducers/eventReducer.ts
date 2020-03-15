import { eventAPI } from 'api';
import { stopSubmit } from 'redux-form';
import { AppStateType } from 'redux/reducers';
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

// Constants
const SET_USER_DATA = 'event-frontend/eventReducer/SET_USER_DATA';
//------------

// InitialState
const initialState = {
  firstName: null as string | null,
  lastName: null as string | null,
  email: null as string | null,
  eventDate: null as Date | null,
  isRegistered: false
};
//------------

// InitialStateType
export type InitialStateType = typeof initialState;
//------------

// Dispatch Actions
const eventReducer = (
  state = initialState,
  action: ActionsTypes
): InitialStateType => {
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

// ActionsTypes
type ActionsTypes = SetUserDataActionType;
//------------

// Action Creators Payload Type
type SetUserDataActionPayloadType = {
  firstName: string;
  lastName: string;
  email: string;
  eventDate: Date;
  isRegistered: boolean;
};
//------------

// Action Creators Type
type SetUserDataActionType = {
  type: typeof SET_USER_DATA;
  payload: SetUserDataActionPayloadType;
};
//------------

// Action Creators
export const setUserData = (
  firstName: string,
  lastName: string,
  email: string,
  eventDate: Date,
  isRegistered: boolean
): SetUserDataActionType => ({
  type: SET_USER_DATA,
  payload: { firstName, lastName, email, eventDate, isRegistered }
});
//------------

// Thunk Creators Type
type DispatchType = Dispatch<ActionsTypes> | any;
type ThunkType = ThunkAction<
  Promise<void>,
  AppStateType,
  unknown,
  ActionsTypes
>;
//------------

// Thunk Creators
export const addUserData = (
  firstName: string,
  lastName: string,
  email: string,
  eventDate: Date
): ThunkType => async (dispatch: DispatchType) => {
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
