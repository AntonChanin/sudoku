module.exports = function solveSudoku(matrix) {
  // your solution
  let nonPossibilites = {};
  for (let vert = 0; vert < matrix.length; vert++) {
  	for (let horz= 0; i < matrix.length; horz++) {
  		if (matrix[vert][horz] === 0) {
  			nonPossibilites = {};
  			for (let i = 0; i < 10; i++) {
  				if (matrix[vert][horz] > 0) {
  					nonPossibilites[matrix[vert][horz]] = true;
  				}
  			}
  		}
  	}
  }

}
