import { loadUsersAction } from "./usersActionCreators";
import actionTypes from "./usersActionTypes";

describe("Given a loadUsers from usersActionCreator", () => {
  describe("When it receives a lis of users", () => {
    test("Then it should return a loadUsers type action with the users received", () => {
      const users = [{ user1: "nunu" }, { user1: "nununun" }];

      const action = {
        type: actionTypes.loadUsers,
        users,
      };

      const result = loadUsersAction(users);

      expect(result).toEqual(action);
    });
  });
});
