const { NotImplementedError } = require('../extensions/index.js');
/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

function countCats(matrix) {
  let cats = [];
  let count = matrix
  .map(element => element.filter(item => item === '^^'));
  for(let i = 0; i < count.length; i++){
    cats.push(...count[i]);
  }
  return cats.length;
}
module.exports = {
  countCats
};
