const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  if (!date instanceof Date) {
    throw new CustomError('Not implemented');
  } else {
    let month = date.getMonth();
    console.log(date);
    console.log(month);
    if (month >= 2 && month < 5) {
      return 'spring';
    } else if (month >= 5 && month < 8) {
      return 'summer';
    } else if (month >= 8 && month < 11) {
      return 'autumn';
    } else return 'winter';
  }
};