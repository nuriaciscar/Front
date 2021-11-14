import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import configureStore from "./redux/store/index";

describe("Given an App component", () => {
  describe("When it's rendered and it contains a robot in the database'", () => {
    test("Then it should render a robot card", async () => {
      const store = configureStore();
      render(
        <Provider store={store}>
          <Router>
            <App />
          </Router>
        </Provider>
      );
    });
  });
});
