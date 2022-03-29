const stringLength = (string) => {
  if (string.length >= 1 && string.length <= 10) {
    return string.length;
  }
  throw new Error("The string is not between 1 and 10");
};

module.exports = stringLength;
