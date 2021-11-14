import actionTypes from "../actions/actionTypes";
import userReducer from "./userReducer";

describe("Given a useUser reducer", () => {
  describe("When it receives a user and a loginUser action", () => {
    test("Then it should return a user authenticathed", () => {
      const user = {
        isAuthenticated: false,
        user: {},
      };

      const loginUser = {
        type: actionTypes.loginUser,
        user,
      };

      const newUser = userReducer(user, loginUser);

      expect(newUser).toHaveProperty("isAuthenticated", true);
    });
  });
  describe("When it receives a user and an unknown action", () => {
    test("Then it should return the user no authenthicated yet", () => {
      const user = {
        isAuthenticated: false,
        user: {},
      };

      const loginUser = {
        type: "don't know",
      };
      const newUser = userReducer(user, loginUser);

      expect(newUser).toEqual(user);
    });
  });
});
