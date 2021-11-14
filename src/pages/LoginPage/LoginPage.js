import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const user = useSelector((store) => store.user);

  let navigate = useNavigate();

  useEffect(() => {
    user.isAuthenticated ? navigate("/users/") : navigate("/login");
  }, [navigate, user]);

  return (
    <>
      <div>
        <Link to="/login/login">
          <button>Login</button>
        </Link>

        <Link to="/login/register">
          <button>Sign Up</button>
        </Link>
      </div>
    </>
  );
};

export default LoginPage;
