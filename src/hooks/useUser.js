import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUserThunk } from "../redux/thunks/loginUserThunk";

const useUser = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const loginUser = useCallback(
    (user) => {
      dispatch(loginUserThunk(user));
    },
    [dispatch]
  );
  return { user, loginUser };
};

export default useUser;