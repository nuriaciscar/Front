// import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import CardUser from "../../components/cardUser/CardUser";

import useUsers from "../../hooks/useUsers";

const HomePage = () => {
  const { users, loadUsers } = useUsers();
  console.log("pepe", users);
  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  return (
    <main className="main">
      <section>
        <div className="container">
          <div className="row">
            <h1>My Friends </h1>
            {users.map((user) => (
              <CardUser user={user} key={user.id} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
