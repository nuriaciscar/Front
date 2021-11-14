import axios from "axios";
import jwtDecode from "jwt-decode";
import { loginUserAction } from "../actions/actionCreators";

const urlApi = process.env.REACT_APP_API_URL;

export const loginUserThunk = (user) => {
  return async (dispatch) => {
    const { data: token } = await axios.post(urlApi + "/login/login", user);
    localStorage.setItem(process.env.REACT_APP_LOCALSTORAGE_KEY, token.token);
    const userInfo = jwtDecode(token);
    dispatch(loginUserAction(userInfo));
  };
};
