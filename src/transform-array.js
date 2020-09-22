const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  throw new CustomError('Not implemented');
  // remove line with error and write your code here


  /*if (!arr instanceof Array) {
    throw new CustomError('Error');
  }
  let result = [];
   let i = 0;
  while (i < arr.length) {
    if (typeof arr[i] === Number) {
      console.log('просто число ', arr[i]);
      result.push(arr[i]);
      i += 1;
    } else {
      if (arr[i] === '--discard-next') {
        console.log('убрать сл');
        i += 2;
      }
      if (arr[i] === '--discard-prev') {
        console.log('убрать пр');
        result.pop();
        i += 1;
      }
      if (arr[i] === '--double-next') {
        console.log('удвоить сл');
        let doubledItem = arr[i + 1] * 2;
        result.push(doubledItem);
        i += 2;
      }
      if (arr[i] === '---double-prev') {
        console.log('удвоить пр');
        result.pop();
        let doubledItem = arr[i - 1] * 2;
        result.push(doubledItem);
        i += 1;
      }
    }
  }
  return result;*/
};