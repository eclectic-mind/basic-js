const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  const flatArray = matrix.flat();
  if (flatArray.length === 0) {
    return 0;
  }
  const cats = flatArray.filter((item) => {
    return item === '^^';
  });
  return cats.length;
};