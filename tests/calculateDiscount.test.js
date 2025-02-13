const {
  calculateDiscount,
  calculateFinalPrice,
} = require("../src/calculateDiscount");

describe("Discount Calculation", () => {
  describe("calculateDiscount", () => {
    test("Member + spending over 100 => 15% discount", () => {
      expect(calculateDiscount(true, 150)).toBe(0.15);
    });

    test("Member only (no high spending) => 10% discount", () => {
      expect(calculateDiscount(true, 80)).toBe(0.1);
    });

    test("Not a member, but spending over 100 => 5% discount", () => {
      expect(calculateDiscount(false, 120)).toBe(0.05);
    });

    test("Neither member nor high spending => 0% discount", () => {
      expect(calculateDiscount(false, 50)).toBe(0);
    });
  });

  describe("calculateFinalPrice", () => {
    test("Member + spending over 100 => final price has 15% off", () => {
      const finalPrice = calculateFinalPrice(200, true, 150);
      expect(finalPrice).toBe(170);
    });

    test("Member only => final price has 10% off", () => {
      const finalPrice = calculateFinalPrice(100, true, 90);
      expect(finalPrice).toBe(90);
    });

    test("Not a member, spending over 100 => final price has 5% off", () => {
      const finalPrice = calculateFinalPrice(100, false, 150);
      expect(finalPrice).toBe(95);
    });

    test("No discount => final price unchanged", () => {
      const finalPrice = calculateFinalPrice(80, false, 50);
      expect(finalPrice).toBe(80);
    });
  });
});
