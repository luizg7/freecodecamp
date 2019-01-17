let numString = "Your sandwich will be $5.00";
let numRegex = /\d/ig; // Change this line
let result = numString.match(numRegex).length;
