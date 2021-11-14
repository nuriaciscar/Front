import { loginUserAction } from "./actionCreators";
import actionTypes from "./actionTypes";

describe("Given a loginUser actionCreator", () => {
  describe("When it receives a user", () => {
    test("Then it should return a loginUser type action with the user received", () => {
      const user = {
        isAuthenthicated: false,
        user: {},
      };

      const action = {
        type: actionTypes.loginUser,
        user,
      };

      const result = loginUserAction(user);

      expect(result).toEqual(action);
    });
  });
});
