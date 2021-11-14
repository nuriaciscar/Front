import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import LoginForm from "./LoginForm";
import configureStore from "../../redux/store/index";
import userEvent from "@testing-library/user-event";

describe("Given a component LoginForm", () => {
  describe("When it's rendered'", () => {
    test("Then it should render a form with a button login", () => {
      const store = configureStore();

      render(
        <Provider store={store}>
          <LoginForm />
        </Provider>
      );

      const buttonForm = screen.getByRole("button", { name: /login/i });
      const titleForm = screen.getByRole("heading", { name: /login/i });
      const username = screen.getByLabelText(/username/i);

      expect(buttonForm).toBeInTheDocument();
      expect(titleForm).toBeInTheDocument();
      expect(username).toBeInTheDocument();
    });
  });
  describe("When the user types on the username input'", () => {
    test("Then it should render a username input with the text typed inside", () => {
      const store = configureStore();

      render(
        <Provider store={store}>
          <LoginForm />
        </Provider>
      );

      const text = "Luis";
      const inputUsername = screen.getByLabelText(/username/i);
      userEvent.type(inputUsername, text);

      expect(inputUsername).toHaveValue(text);
    });
  });
});
