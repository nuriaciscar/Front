import actionTypes from "./actionTypes";

export const loginUserAction = (user) => ({
  type: actionTypes.loginUser,
  user,
});
