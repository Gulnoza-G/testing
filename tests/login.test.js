const {
    validateUsername,
    validatePassword,
    login,
  } = require("../src/login");
  
  describe("validateUsername", () => {
    test("true: non-empty string", () => {
      expect(validateUsername("Aziza")).toBe(true);
      expect(validateUsername("  Aziz  ")).toBe(true);
    });
  
    test("false: empty string or non-string", () => {
      expect(validateUsername("")).toBe(false);
      expect(validateUsername("   ")).toBe(false);
      expect(validateUsername(null)).toBe(false);
      expect(validateUsername(undefined)).toBe(false);
      expect(validateUsername(123)).toBe(false);
    });
  });
  
  describe("validatePassword", () => {
    test("true: for a non-empty string", () => {
      expect(validatePassword("gulnoza123")).toBe(true);
    });
  
    test("false: emtpy string or not-string", () => {
      expect(validatePassword("")).toBe(false);
      expect(validatePassword("     ")).toBe(false);
      expect(validatePassword(null)).toBe(false);
      expect(validatePassword(undefined)).toBe(false);
    });
  });
  
  describe("login", () => {
    test("Successful Login!", () => {
      const result = login("Valid User", "Valid Password");
      expect(result.success).toBe(true);
      expect(result.usernameError).toBeNull();
      expect(result.passwordError).toBeNull();
    });
  
    test("Fails - invalid username && valid password", () => {
      const result = login("     ", "Valid Password");
      expect(result.success).toBe(false);
      expect(result.usernameError).toBe("Invalid username");
      expect(result.passwordError).toBeNull();
    });
  
    test("Fails - valid username && invalid password", () => {
      const result = login("Valid User", "  ");
      expect(result.success).toBe(false);
      expect(result.usernameError).toBeNull();
      expect(result.passwordError).toBe("Invalid password");
    });
  
    test("Fails - invalid username && invalid password", () => {
      const result = login("", " ");
      expect(result.success).toBe(false);
      expect(result.usernameError).toBe("Invalid username");
      expect(result.passwordError).toBe("Invalid password");
    });
  });
  