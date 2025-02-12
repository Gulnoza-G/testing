/// 1-password-validation
function isValidPassword(password) {
  if (typeof password !== "string") return false;

  const passwordValidLength = password.length >= 8 && password.length <= 12;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasDigit = /\d/.test(password);

  return passwordValidLength && hasUpperCase && hasLowerCase && hasDigit;
}

/// 2-age-validation
function isValidAge(age) {
  if (typeof age !== "number" || Number.isNaN(age)) {
    return false;
  } else {
    return age >= 18 && age <= 60;
  }
}

/// 3-login
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

  if (!isUsernameValid){
    usernameError 
  }
}

module.exports = { isValidPassword, isValidAge };
