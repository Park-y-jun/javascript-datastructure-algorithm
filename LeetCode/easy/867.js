//867. Transpose Matrix
// Matrix[0]이 행, Matrix.length가 열인데 이것을 뒤집어서 새로운 배열을 만들어
//[행][열] [열][행]
 
var transpose = function (matrix) {
  const result = Array.from({ length: matrix[0].length }, () => Array.from(matrix.length).fill(0));

  for(let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      result[i][j] = matrix[j][i]
    }
  }

  return result;
};