import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUserThunk } from "../redux/thunks/loginUserThunk";
import jwtDecode from "jwt-decode";

const useUser = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const loginUser = useCallback(
    (user) => {
      dispatch(loginUserThunk(user));
    },
    [dispatch]
  );

  const isAuthenticated = useCallback(() => {
    if (localStorage.getItem("user")) {
      const token = localStorage.getItem("user");
      const user = jwtDecode(token);

      const keepUser = {
        username: user.username,
        password: user.password,
      };

      dispatch(loginUserThunk(keepUser));
    }
  }, [dispatch]);

  return { user, loginUser, isAuthenticated };
};

export default useUser;
