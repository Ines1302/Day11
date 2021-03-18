function multiplyArrayFunction(myArray) {
  var newMyArray = [...myArray];
  var arr = [];
  var product = 1;
  var sum = 0;
  for (var i = 0; i < newMyArray.length; i++) {
    for (var j = 0; j < newMyArray[i].length; j++) {
      product = product * newMyArray[i][j];
      sum = sum + newMyArray[i][j];
    }
  }
  arr.push(product, sum);
  return arr;
}

console.log(multiplyArrayFunction([[2], [5, 6, 7], [8, 9]]));
console.log(multiplyArrayFunction([[2.5, 2], [0.5, 0.2], [8]]));
console.log(
  multiplyArrayFunction([
    [1, 2],
    [3, 4, 5, 6],
    [7, 8, 9],
  ])
);
module.exports = multiplyArrayFunction;
