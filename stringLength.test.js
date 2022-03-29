const stringLength = require("./stringLength");

describe("exception test", () => {
  it("Should throw an error", () =>
    expect(() => {
      stringLength("abcdefghijkl");
    }).toThrow());
});
