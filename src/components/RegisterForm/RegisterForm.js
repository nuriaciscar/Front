import { useEffect, useState } from "react";

const RegisterForm = () => {
  const initialUserData = {
    username: "",
    password: "",
    name: "",
    age: "",
    bio: "",
    image: "",
  };

  const [loginUserData, setUserData] = useState(initialUserData);
  const [isDisabled, setIsDisabled] = useState(true);

  const onSubmit = (event) => {
    event.preventDefault();
  };

  const changeDataUser = (event) => {
    setUserData({
      ...loginUserData,
      [event.target.id]: event.target.value,
    });
  };

  useEffect(() => {
    setIsDisabled(
      loginUserData.username === "" ||
        loginUserData.password === "" ||
        loginUserData.name === "" ||
        loginUserData.age === "" ||
        loginUserData.bio === ""
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
          <h2 className="form-signin-heading">Sign up</h2>

          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
            onChange={changeDataUser}
            className="loginform_input"
            value={loginUserData.name}
          ></input>

          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            required
            onChange={changeDataUser}
            className="loginform_input"
            value={loginUserData.username}
          ></input>

          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
            onChange={changeDataUser}
            className="loginform_input"
            value={loginUserData.password}
          ></input>

          <input
            type="text"
            id="age"
            name="age"
            min="16"
            max="130"
            placeholder="Age"
            required
            onChange={changeDataUser}
            className="loginform_input"
            value={loginUserData.age}
          ></input>

          <textarea
            type=""
            id="bio"
            name="bio"
            placeholder="Bio"
            required
            onChange={changeDataUser}
            className="loginform_input"
            value={loginUserData.bio}
          ></textarea>

          <label className="form-label" htmlFor="customFile">
            Default file input example
          </label>
          <input
            value={loginUserData.image}
            type="file"
            className="form-control"
            id="customFile"
            onChange={changeDataUser}
          />
          <button
            type="submit"
            className="btn btn-lg btn-primary btn-block"
            disabled={isDisabled}
          >
            Register
          </button>
          <p className="text-center sign-up">
            <strong>Or</strong>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
