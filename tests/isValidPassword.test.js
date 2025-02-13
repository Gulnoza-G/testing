const { isValidPassword } = require("../src/isValidPassword");

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
