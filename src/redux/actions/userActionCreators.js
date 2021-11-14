import actionTypes from "./userActionTypes";

export const loadUsersAction = (users) => ({
  type: actionTypes.loadUsers,
  users,
});

export const loginUserAction = (user) => ({
  type: actionTypes.loginUser,
  user,
});
