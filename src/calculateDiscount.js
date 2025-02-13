function calculateDiscount(isMember, amount) {
  const hasMembershipDiscount = isMember === true;
  const hasSpendingDiscount = amount > 100;

  if (hasMembershipDiscount && hasSpendingDiscount) {
    return 0.15;
  } else if (hasMembershipDiscount) {
    return 0.1;
  } else if (hasSpendingDiscount) {
    return 0.05;
  }
  return 0;
}

function calculateFinalPrice(originalPrice, isMember, amount) {
  const discountRate = calculateDiscount(isMember, amount);
  const discountAmount = originalPrice * discountRate;
  return originalPrice - discountAmount;
}

module.exports = {
  calculateDiscount,
  calculateFinalPrice,
};
