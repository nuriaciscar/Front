import axios from "axios";
import { loadUsersAction } from "../actions/usersActionCreators";

export const loadUsersThunk = () => async (dispatch) => {
  const { data: robots } = await axios.get(process.env.REACT_APP_API_URL);
  dispatch(loadUsersAction(robots));
};
