function multiplyAll(arr) {
  var product = 1;
  console.log(arr.length + "First Array Length")
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j]
      console.log(product)
    }
  }
  // Only change code above this line
  return product;
}

// Modify values below to test your code
multiplyAll([[1,7],[3,3]]);
