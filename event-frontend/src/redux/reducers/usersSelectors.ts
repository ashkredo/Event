import { createSelector } from 'reselect';
import { AppStateType } from './';

const getUsersSelector = (state: AppStateType) => {
  return state.usersPage.users;
};

export const getUsers = createSelector(getUsersSelector, users => {
  return users.filter(u => true);
});
