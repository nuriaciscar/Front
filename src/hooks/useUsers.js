import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUserThunk } from "../redux/thunks/loginUserThunk";

const useUsers = () => {
  const users = useSelector((store) => store.users);
  const dispatch = useDispatch();

  const loadUsers = useCallback(
    (token) => {
      dispatch(loginUserThunk(token));
    },
    [dispatch]
  );

  return { users, loadUsers };
};

export default useUsers;
