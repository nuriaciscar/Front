const CardUser = ({ user }) => {
  return (
    <li className="col-md-4">
      <div className="card profile-card">
        <div className="card-img-block">
          <img
            className="card-img-top"
            src={user.image}
            alt={`Photography of ${user.image}`}
          />
        </div>
        <div className="card-body pt-0">
          <h3 className="card_info_user_title">{user.username}</h3>
          <p className="card-text">{user.bio}</p>
        </div>
      </div>
    </li>
  );
};

export default CardUser;
