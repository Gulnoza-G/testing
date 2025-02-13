function validateUsername(username) {
  return typeof username === "string" && username.trim().length > 0;
}

function validatePassword(password) {
  return typeof password === "string" && password.trim().length > 0;
}

function login(username, password) {
  const isUsernameValid = validateUsername(username);
  const isPasswordValid = validatePassword(password);

  if (isUsernameValid && isPasswordValid) {
    return {
      success: true,
      usernameError: null,
      passwordError: null,
    };
  }
  let usernameError = null;
  let passwordError = null;

  if (!isUsernameValid) {
    usernameError = "Invalid username";
  }
  if (!isPasswordValid) {
    passwordError = "Invalid password";
  }

  return {
    success: false,
    usernameError,
    passwordError,
  };
}

module.exports = {
  validateUsername,
  validatePassword,
  login,
};
