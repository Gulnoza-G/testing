function validateUsername(username) {
    if (typeof username !== "string") {
      return false;
    }
    if (username.trim() === "") {
      return false;
    }
    return true;
  }
  
  function validatePassword(password) {
    if (typeof password !== "string") {
      return false;
    }
    if (password.trim() === "") {
      return false;
    }
    return true;
  }
  
  function login(username, password) {
    var isUsernameValid = validateUsername(username);
    var isPasswordValid = validatePassword(password);
  
    if (isUsernameValid && isPasswordValid) {
      return {
        success: true,
        usernameError: null,
        passwordError: null,
      };
    }
  
    var usernameError = null;
    var passwordError = null;
  
    if (!isUsernameValid) {
      usernameError = "Invalid username";
    }
    if (!isPasswordValid) {
      passwordError = "Invalid password";
    }
  
    return {
      success: false,
      usernameError: usernameError,
      passwordError: passwordError,
    };
  }
  
  module.exports = {
    validateUsername: validateUsername,
    validatePassword: validatePassword,
    login: login,
  };
  