import cardUser from "../../components/cardUser/cardUser";

const HomePage = () => {
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
