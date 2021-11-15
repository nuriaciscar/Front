import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadUsersThunk } from "../redux/thunks/usersThunk";

const useUsers = () => {
  const users = useSelector((store) => store.users);
  const dispatch = useDispatch();

  const loadUsers = useCallback(() => {
    dispatch(loadUsersThunk);
  }, [dispatch]);

  return { users, loadUsers };
};

export default useUsers;
