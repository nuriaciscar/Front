import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadUsersThunk, registerUserThunk } from "../redux/thunks/usersThunk";

const useUsers = () => {
  const users = useSelector((store) => store.users);
  const dispatch = useDispatch();

  const loadUsers = useCallback(() => {
    dispatch(loadUsersThunk);
  }, [dispatch]);

  const registerUser = useCallback(
    (user) => {
      dispatch(registerUserThunk(user));
    },
    [dispatch]
  );

  return { users, loadUsers, registerUser };
};

export default useUsers;
