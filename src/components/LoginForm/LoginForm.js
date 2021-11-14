import { useEffect, useState } from "react";

import useUser from "../../hooks/useUser";

const LoginForm = () => {
  const initialData = {
    username: "",
    password: "",
  };

  const [loginUserData, setUserData] = useState(initialData);
  const [isDisabled, setIsDisabled] = useState(true);
  const { loginUser } = useUser();

  const onSubmit = (event) => {
    event.preventDefault();
    loginUser(loginUserData);
  };

  const changeUserData = (event) => {
    setUserData({
      ...loginUserData,
      [event.target.id]: event.target.value,
    });
  };

  useEffect(() => {
    setIsDisabled(
      loginUserData.username === "" || loginUserData.password === ""
    );
  }, [loginUserData]);

  return (
    <div id="fullBg">
      <div className="container">
        <form
          noValidate
          autoComplete="off"
          onSubmit={onSubmit}
          className="form-signin"
        >
          <h2 className="form-signin-heading">Login</h2>

          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            required
            onChange={changeUserData}
            className="loginform_input"
            value={loginUserData.username}
          ></input>

          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
            onChange={changeUserData}
            className="loginform_input"
            value={loginUserData.password}
          ></input>
          <button
            type="submit"
            className={
              isDisabled
                ? "btn btn-lg btn-primary btn-block"
                : "btn btn-lg btn-primary btn-block"
            }
            disabled={isDisabled}
          >
            Login
          </button>
        </form>
        <p className="text-center sign-up">
          <strong>Or</strong>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
