import { createSelector } from 'reselect';

const getUsersSelector = state => {
  return state.users.users;
};

export const getUsers = createSelector(getUsersSelector, users => {
  return users.filter(u => true);
});
