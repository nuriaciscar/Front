import actionTypes from "../actions/actionTypes";

const userReducer = (
  currentUser = { isAuthenticated: false, user: {} },
  action
) => {
  let newUser;

  switch (action.type) {
    case actionTypes.loginUser:
      newUser = {
        ...currentUser,
        isAuthenticated: true,
        user: action.currentUser,
      };
      break;

    default:
      newUser = currentUser;
  }
};

export default userReducer;
