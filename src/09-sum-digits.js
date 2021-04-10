/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const arr = String(n).split('');
  const reducer = (acc, cur) => +acc + +cur;
  let str = arr.reduce(reducer);
  while (String(str).length > 1) {
    str = String(str).split('').reduce(reducer);
  }
  return str;
}

module.exports = getSumOfDigits;
