function isValidAge(age) {
  if (typeof age !== "number" || Number.isNaN(age)) {
    return false;
  } else {
    return age >= 18 && age <= 60;
  }
}

module.exports = {
  isValidAge,
};
