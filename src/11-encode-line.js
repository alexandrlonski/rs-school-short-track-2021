/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = '';
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    let count = 1;
    let j = i + 1;

    while (j < str.length && str[j] === letter) {
      count++;
      j++;
    }

    i += count - 1;
    res += count === 1 ? `${letter}` : `${count}${letter}`;
  }
  return res;
}
module.exports = encodeLine;
