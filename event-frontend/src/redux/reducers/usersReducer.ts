import { usersAPI } from 'api';
import { UserType } from 'types';

// Constants
const SET_USERS = 'event-frontend/usersReducer/SET_USERS';
//------------

// InitialState
const initialState = {
  users: [] as Array<UserType>
};
//------------

// InitialStateType
type InitialStateType = typeof initialState;
//------------

// Dispatch Actions
const usersReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_USERS: {
      return { ...state, users: action.users };
    }
    default:
      return state;
  }
};
//------------

// Action Creators Type
type setUsersActionType = {
  type: typeof SET_USERS;
  users: Array<UserType>;
};
//------------

// Action Creators
export const setUsers = (users: Array<UserType>): setUsersActionType => ({
  type: SET_USERS,
  users
});
//------------

// Thunk Creators
export const getUsersData = () => {
  return async (dispatch: any) => {
    const data = await usersAPI.getUsers();
    dispatch(setUsers(data));
  };
};
//------------

export default usersReducer;
