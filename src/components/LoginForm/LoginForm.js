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
    <form
      noValidate
      autoComplete="off"
      onSubmit={onSubmit}
      className="loginform"
    >
      <h2 className="loginform_title">Login</h2>
      <label htmlFor="username" className="loginform_label">
        Username
      </label>
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
      <label htmlFor="password" className="loginform_label">
        Password
      </label>
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
          isDisabled ? "loginform_submit_disabled" : "loginform_submit_active"
        }
        disabled={isDisabled}
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
