import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import useUsers from "../../hooks/useUsers";

const HomePage = () => {
  const { users, loadUsers } = useUsers();
  const dispatch = useDispatch();

  const [getUser, setGetUser] = useState();

  useEffect(() => {
    loadUsers();
  }, [dispatch, loadUsers]);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      const token = localStorage.getItem("user");
      const user = jwtDecode(token);
      setGetUser(user.name);
      loadUsers(token);
    }
  }, [loadUsers]);

  return (
    <main className="main">
      <section>
        <h1>My Friends </h1>
        {users.map((user) => (
          <cardUser user={user} key={user.id} />
        ))}
      </section>
    </main>
  );
};

export default HomePage;
