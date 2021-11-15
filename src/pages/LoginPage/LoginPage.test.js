import LoginPage from "./LoginPage";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "../../redux/store/index";
import { BrowserRouter as Router } from "react-router-dom";

describe("Given a LoginPage component", () => {
  describe("When it's rendered", () => {
    test("Then it should render the LoginPage", async () => {
      const store = configureStore();

      render(
        <Provider store={store}>
          <Router>
            <LoginPage />
          </Router>
        </Provider>
      );
    });
  });
});
