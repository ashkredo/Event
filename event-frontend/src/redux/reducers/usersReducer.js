import { usersAPI } from 'api';

// Constants
const SET_USERS = 'event-frontend/usersReducer/SET_USERS';
//------------

// InitialState
const initialState = {
  users: []
};
//------------

// Dispatch Actions
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS: {
      return { ...state, users: action.users };
    }
    default:
      return state;
  }
};
//------------

// Action Creators
export const setUsers = users => ({ type: SET_USERS, users });
//------------

// Thunk Creators
export const getUsersData = () => {
  return async dispatch => {
    const data = await usersAPI.getUsers();
    dispatch(setUsers(data));
  };
};
//------------

export default usersReducer;
