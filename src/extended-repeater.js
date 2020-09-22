const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (!str) return false;

  const {
    repeatTimes = 1,
      separator = `+`,
      addition = ``,
      additionRepeatTimes = 1,
      additionSeparator = `|`,
  } = options;

  const makeWholeSequence = (string, sep, times) => {
    let res = ``;
    if (times < 2) {
      res += string;
    } else {
      for (let i = 0; i < times - 1; i += 1) {
        res += string + sep;
      }
      res += string;
    }
    return res;
  };

  const addText = makeWholeSequence(addition, additionSeparator, additionRepeatTimes);
  const newString = str + addText;
  return makeWholeSequence(newString, separator, repeatTimes);
};