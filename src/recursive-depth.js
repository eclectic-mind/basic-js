const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(array) {
    if (!array) return 0;
    return Array.isArray(array) ? 1 + Math.max(...array.map(calculateDepth)) : 0;
  }
};