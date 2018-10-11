function printManyTimes(str) {
  "use strict";

  // change code below this line

  const SENTENCE = str + " is cool!";
  for(let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

  // change code above this line

}
printManyTimes("freeCodeCamp");

// the const keywords create a variable that is read-only.
// This means that the variable can be modify/edit/change.
// A common practice when using a const declaration is
// declaring the name of the variable all on uppercase.
// Example
// const BOOKS = ['Game of Thrones', 'Lord of the Rings'. '12 Rules for Life']
