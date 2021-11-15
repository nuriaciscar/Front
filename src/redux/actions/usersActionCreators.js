import usersActionTypes from "./usersActionTypes";

export const loadUsersAction = (users) => ({
  type: usersActionTypes.loadUsers,
  users,
});

export const registerUserAction = (user) => ({
  type: usersActionTypes.registerUser,
  user,
});
