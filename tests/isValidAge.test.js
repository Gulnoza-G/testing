const { isValidAge } = require("../src/isValidAge");

describe("isValidAge", () => {
  test("true: minimum age is 18", () => {
    expect(isValidAge(18)).toBe(true);
  });

  test("true: maximum age is 60", () => {
    expect(isValidAge(60)).toBe(true);
  });

  test("false: age < 18", () => {
    expect(isValidAge(17)).toBe(false);
  });

  test("false: age > 60", () => {
    expect(isValidAge(61)).toBe(false);
  });

  test("true: middle age", () => {
    expect(isValidAge(30)).toBe(true);
  });

  test("false: non-numeric && invalid type", () => {
    expect(isValidAge("25")).toBe(false);
    expect(isValidAge(null)).toBe(false);
    expect(isValidAge(undefined)).toBe(false);
    expect(isValidAge(NaN)).toBe(false);
  });
});
