import axios from "axios";
import {
  loadUsersAction,
  registerUserAction,
} from "../actions/usersActionCreators";

export const loadUsersThunk = async (dispatch) => {
  const { data: users } = await axios.get(
    process.env.REACT_APP_API_URL + "/users",
    {
      headers: {
        Authorization:
          "Bearer " +
          localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE_KEY),
      },
    }
  );

  dispatch(loadUsersAction(users));
};

export const registerUserThunk = (user) => async (dispatch) => {
  const registeredUser = new FormData();
  registeredUser.append("username", user.username);
  registeredUser.append("password", user.password);
  registeredUser.append("name", user.name);
  registeredUser.append("image", user.image);
  registeredUser.append("age", user.age);
  registeredUser.append("bio", user.bio);

  const { data: newUser } = await axios.post(
    process.env.REACT_APP_API_URL + "/login/register",
    registeredUser
  );

  dispatch(registerUserAction(newUser));
};
