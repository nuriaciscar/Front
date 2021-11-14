import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import useUser from "../../hooks/useUser";
const { isAuthenticated } = useUser;

const LoginPage = () => {
  const user = useSelector((store) => store.user);
  const [registered, setIsRegistered] = useState(false);

  let navigate = useNavigate();

  useEffect(() => {
    user.isAuthenticated ? navigate("/users") : navigate("/login");
  }, [navigate, user]);

  const enter = () => {
    setIsRegistered(!registered);
  };

  return (
    <div>
      {!registered ? (
        <>
          <Link to="/login/register">
            <button onClick={enter}>Register</button>
          </Link>
          <LoginForm />
        </>
      ) : (
        <>
          <Link to="/login">
            <button>Back to Login</button>
          </Link>
          <RegisterForm />
        </>
      )}
    </div>
  );
};

export default LoginPage;
