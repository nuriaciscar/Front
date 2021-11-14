import { render, screen } from "@testing-library/react";
import { Provider, Router } from "react-redux";
import RegisterForm from "./RegisterForm";
import configureStore from "../../redux/store/index";
import userEvent from "@testing-library/user-event";

describe("Given a component RegisterForm", () => {
  describe("When it's rendered'", () => {
    test("Then it should render a form with a button register and h2 Sign Up", () => {
      const store = configureStore();

      render(
        <Provider store={store}>
          <Router>
            <RegisterForm />
          </Router>
        </Provider>
      );

      const buttonForm = screen.getByRole("button", { name: /register/i });
      const titleForm = screen.getByRole("heading", { name: /sign up/i });
      const ageInput = screen.getByLabelText(/age/i);

      expect(buttonForm).toBeInTheDocument();
      expect(titleForm).toBeInTheDocument();
      expect(ageInput).toBeInTheDocument();
    });
  });
  describe("When the user types on the name input'", () => {
    test("Then it should render a name input with the text typed inside", () => {
      const store = configureStore();

      render(
        <Provider store={store}>
          <RegisterForm />
        </Provider>
      );

      const text = "nunu";
      const inputName = screen.getByLabelText(/name/i);
      userEvent.type(inputName, text);

      expect(inputName).toHaveValue(text);
    });
  });
});
