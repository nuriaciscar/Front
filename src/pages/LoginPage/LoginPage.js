import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const LoginPage = () => {
  const user = useSelector((store) => store.user);
  const [clicked, setIsClicked] = useState(false);

  let navigate = useNavigate();

  useEffect(() => {
    user.isAuthenticated ? navigate("/users/") : navigate("/login");
  }, [navigate, user]);

  const openRegistration = () => {
    setIsClicked(!clicked);
  };
  return (
    <div>
      {!clicked ? (
        <>
          <Link to="/login/login">
            <button onClick={openRegistration}>Register</button>
          </Link>
          <RegisterForm />
        </>
      ) : (
        <>
          <Link to="/login/register">
            <button>Back to Login</button>
          </Link>
          <LoginForm />
        </>
      )}
    </div>
  );
};

export default LoginPage;
