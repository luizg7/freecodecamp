const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
  let squaredIntegers = arr.filter(item => Number.isInteger(item) === true && item > 0).map(s => s * s)
  return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
