import axios from "axios";
import jwtDecode from "jwt-decode";
import { loginUserAction } from "../actions/userActionCreators";

const urlApi = process.env.REACT_APP_API_URL;

export const loginUserThunk = (user) => async (dispatch) => {
  try {
    const { data, status } = await axios.post(urlApi + "/login", user);
    const token = data.token;
    if (status === 200) {
      const user = jwtDecode(token);
      dispatch(loginUserAction(user.username));
      window.localStorage.setItem(
        process.env.REACT_APP_LOCALSTORAGE_KEY,
        token
      );
    }
  } catch {}
};
