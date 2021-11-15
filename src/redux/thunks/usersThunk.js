import axios from "axios";
import { loadUsersAction } from "../actions/usersActionCreators";

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
  console.log(users);
  dispatch(loadUsersAction(users));
};
