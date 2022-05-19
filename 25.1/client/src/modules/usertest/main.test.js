const sum = require("../sum");

test("(5 * 2 + 3)/4", () => {
  expect(sum(5, 2, 3, 4)).toBe(3.25);
});
