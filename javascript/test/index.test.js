/** /test/index.js */
const { max } = require("../src/index.js");

describe("Test max()", () => {
  test("max(1, 2) = 2", () => {
    expect(max(1, 2)).toBe(2);
  });

  test("max(2, 1) = 2", () => {
    expect(max(2, 1)).toBe(2);
  });

  test("max(1, 1) = 1", () => {
    expect(max(1, 1)).toBe(1);
  });
});