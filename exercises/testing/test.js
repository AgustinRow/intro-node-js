const users = require("./users");
const api = require("./api");
const index = require("./index");

// write some tests
describe("users", () => {
  test("users", () => {
    expect(users.users).toHaveLength(1);
  });
});
