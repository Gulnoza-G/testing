const { isValidPassword, isValidAge } = require("./main");

describe("isValidPassword", () => {
  test("true: valid password", () => {
    expect(isValidPassword("Elizabeth03")).toBe(true);
  });

  test("false: password is too short", () => {
    expect(isValidPassword("Elsa")).toBe(false);
  });

  test("false: no uppercase letter", () => {
    expect(isValidPassword("elizabeth03")).toBe(false);
  });
  test("false: no lowercase letter", () => {
    expect(isValidPassword("ELIZABETH03")).toBe(false);
  });
  test("false: no digit", () => {
    expect(isValidPassword("Elizabeth")).toBe(false);
  });
  test("false: input is not string", () => {
    expect(isValidPassword(null)).toBe(false);
    expect(isValidPassword(undefined)).toBe(false);
    expect(isValidPassword(1234567891011)).toBe(false);
  });
});

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
