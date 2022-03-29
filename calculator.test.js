const calculator = require("./calculator");

describe("methods test", () => {
  it("Should return 6", () => expect(calculator.add(5, 1)).toBe(6));
  it("Should return 0", () => expect(calculator.subtract(1, 1)).toBe(0));
  it("Should return 5", () => expect(calculator.divide(5, 1)).toBe(5));
});
