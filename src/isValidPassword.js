function isValidPassword(password) {
  if (typeof password !== "string") return false;

  const passwordValidLength = password.length >= 8 && password.length <= 12;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasDigit = /\d/.test(password);

  return passwordValidLength && hasUpperCase && hasLowerCase && hasDigit;
}

module.exports = {
  isValidPassword,
};
