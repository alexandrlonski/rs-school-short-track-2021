/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
// const matrix = [
//   [true, false, false],
//   [false, true, false],
//   [false, false, false],
// ];

function minesweeper(/* matrix */) {
  // const matrixNew = matrix;
  // const newArr = [];
  // const numOfArr = matrix[0].length;
  // for (let i = 0; i < matrix.length; i++) {
  //   for (let j = 0; j < numOfArr; j++) {
  //     if (matrix[i][j] === true) newArr.push(matrix[i][j]);
  //   }
  // }
  // if (!newArr[0]) {
  //   for (let i = 0; i < matrix.length; i++) {
  //     for (let j = 0; j < numOfArr; j++) {
  //       matrixNew[i][j] = 0;
  //     }
  //   }
  // }
  // for (let i = 0; i < matrix.length; i++) {
  //   for (let j = 0; j < numOfArr; j++) {
  //     // if (i === 0) {
  //     //   if (
  //     //     (matrix[i][j - 1] || matrix[i][j + 1]) == true &&
  //     //     (matrix[i + 1][j - 1] || matrix[i + 1][j + 1] || matrix[i + 1][j]) ==
  //     //       true
  //     //   ) {
  //     //     matrixNew[i][j] = 2;
  //     //   } else {
  //     //     matrixNew[i][j] = 1;
  //     //   }
  //     // }
  //     if (i > 0 && i < matrix.length) {
  //       if (
  //         (matrix[i][j - 1] || matrix[i][j + 1]) == true
  //         && (matrix[i + 1][j - 1]
  //           || matrix[i + 1][j + 1]
  //           || matrix[i - 1][j - 1]
  //           || matrix[i - 1][j + 1]
  //           || matrix[i + 1][j]
  //           || matrix[i - 1][j]) == true
  //       ) {
  //         matrixNew[i][j] = 2;
  //       } else {
  //         matrixNew[i][j] = 1;
  //       }
  //     }
  //     // if (i === 2) {
  //     //   console.log(matrixNew);
  //     //   if (
  //     //     (matrix[i][j - 1] || matrix[i][j + 1]) == true &&
  //     //     (matrix[i - 1][j - 1] || matrix[i - 1][j + 1] || matrix[i - 1][j]) ==
  //     //       true
  //     //   ) {
  //     //     matrixNew[i][j] = 2;
  //     //   }
  //     // }
  //   }
  // }
  // console.log(matrixNew);
}
// minesweeper(matrix);

module.exports = minesweeper;
