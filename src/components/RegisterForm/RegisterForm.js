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
    <form
      noValidate
      autoComplete="off"
      onSubmit={onSubmit}
      className="loginform"
    >
      <h2 className="loginform_title">Sign up</h2>
      <label htmlFor="name" className="loginform_label">
        Name
      </label>
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
      <label htmlFor="username" className="loginform_label">
        Username
      </label>
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
      <label htmlFor="password" className="loginform_label">
        Password
      </label>
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
      <label htmlFor="age" className="loginform_label">
        Age
      </label>
      <input
        type="number"
        id="age"
        name="age"
        min="16"
        max="130"
        placeholder="Age"
        required
        onChange={changeDataUser}
        className="loginform_input"
        value={loginUserData.username}
      ></input>
      <label htmlFor="bio" className="loginform_label">
        Bio
      </label>
      <textarea
        type=""
        id="bio"
        name="bio"
        placeholder="Bio"
        required
        onChange={changeDataUser}
        className="loginform_input"
        value={loginUserData.username}
      ></textarea>
      <label htmlFor="image" className="loginform_label">
        Bio
      </label>
      <textarea
        type="file"
        id="image"
        onChange={changeDataUser}
        className="loginform_input"
        value={loginUserData.username}
      ></textarea>
      <button
        type="submit"
        className={
          isDisabled ? "loginform_submit_disabled" : "loginform_submit_active"
        }
        disabled={isDisabled}
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
