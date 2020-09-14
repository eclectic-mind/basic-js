const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let result = null;
  if (members.length === 0) {
    result = false;
  }
  let firstLetters = members.forEach((item) => {
    if (typeof (item) !== 'string') {
      result = false;
    } else {
      let arr = item.split('');
      const cleaned = arr.filter((elem) => elem !== ' ');
      return cleaned[0].toUpperCase();
    }

  });
  result = firstLetters.sort().join('');
  return result;
};