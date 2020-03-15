import { usersAPI } from 'api';
import { AppStateType } from 'redux/reducers';
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
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
const usersReducer = (
  state = initialState,
  action: ActionsTypes
): InitialStateType => {
  switch (action.type) {
    case SET_USERS: {
      return { ...state, users: action.users };
    }
    default:
      return state;
  }
};
//------------

// ActionsTypes
type ActionsTypes = SetUsersActionType;
//------------

// Action Creators Type
type SetUsersActionType = {
  type: typeof SET_USERS;
  users: Array<UserType>;
};
//------------

// Action Creators
export const setUsers = (users: Array<UserType>): SetUsersActionType => ({
  type: SET_USERS,
  users
});
//------------

// Thunk Creators Type
type DispatchType = Dispatch<ActionsTypes>;
type ThunkType = ThunkAction<
  Promise<void>,
  AppStateType,
  unknown,
  ActionsTypes
>;
//------------

// Thunk Creators
export const getUsersData = (): ThunkType => {
  return async (dispatch: DispatchType) => {
    const data = await usersAPI.getUsers();
    dispatch(setUsers(data));
  };
};
//------------

export default usersReducer;
