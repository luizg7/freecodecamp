let numString = "Your sandwich will be $5.00";
let noNumRegex = /\D/ig; // Change this line
let result = numString.match(noNumRegex).length;
