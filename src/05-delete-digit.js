/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(num) {
  const str = String(num);
  let arr = [];
  const arrOld = str.split('');
  for (let i = 0; i < arrOld.length; i++) {
    arr.push(arrOld.filter((el, index) => index !== i).join(''));
  }
  arr = arr.sort((a, b) => a - b);
  return Number(arr[arr.length - 1]);
}
module.exports = deleteDigit;
