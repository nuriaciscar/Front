import axios from "axios";
import { loadUsersAction } from "../actions/usersActionCreators";

const url = "https://social-network-nuria.herokuapp.com";

export const loadUsersThunk = async (dispatch) => {
  const { data: users } = await axios.get(url + "/users", {
    headers: {
      Authorization:
        "Bearer" + localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE_KEY),
    },
  });
  dispatch(loadUsersAction(users));
};
