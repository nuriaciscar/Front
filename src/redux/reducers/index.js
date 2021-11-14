import { combineReducers } from "redux";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  //   users: usersReducer,
});

export default rootReducer;
