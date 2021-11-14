import actionTypes from "./usersActionTypes";

export const loadUsersAction = (users) => ({
  type: actionTypes.loadUsers,
  users,
});
