const cardUser = ({ user }) => {
  return (
    <li className="card">
      <div className="card_image">
        <img src={user.image} alt={`Photography of ${user.image}`} />
      </div>
      <section className="card_info">
        <div className="card_info_user">
          <h3 className="card_info_user_title">{user.username}</h3>
        </div>
      </section>
    </li>
  );
};

export default cardUser;
