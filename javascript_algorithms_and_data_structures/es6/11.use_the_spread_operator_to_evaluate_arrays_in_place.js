const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2 = [...arr1];
(function() {
  "use strict";
  arr2 = []; // change this line
})();
console.log(arr2);

// The spread opeartor expands an array as a expression
