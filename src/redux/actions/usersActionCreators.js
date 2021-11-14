import actionTypes from "./userActionTypes";

export const loadUsersAction = (users) => ({
  type: actionTypes.loadUsers,
  users,
});
