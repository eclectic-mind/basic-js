const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let acc = 1;
    const isArray = (item) => {
      return Array.isArray(item);
    };
    arr.map((elem) => {
      if (!!isArray(elem)) {
        acc += 1;
        calculateDepth(elem);
      }
    });
    return acc;
  }
};