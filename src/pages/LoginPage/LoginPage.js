import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

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
            <button
              className="register-button btn btn-lg btn-primary btn-block"
              onClick={enter}
              type="submit"
            >
              Register
            </button>
          </Link>
          <LoginForm />
        </>
      ) : (
        <>
          <RegisterForm />
          <Link to="/login">
            <button
              className="register-login btn btn-lg btn-primary btn-block"
              type="button"
              onClick={enter}
            >
              Back to Login
            </button>
          </Link>
        </>
      )}
    </div>
  );
};

export default LoginPage;
