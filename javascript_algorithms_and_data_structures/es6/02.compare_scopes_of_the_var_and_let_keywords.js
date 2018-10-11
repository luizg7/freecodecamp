function checkScope() {
"use strict";
  let i = "function scope";
  if (true) {
    i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return "function scope";
}


// Another difference between the let and var keywords are:
// The var keyword has another problem, when you declare a var inside a block, statement or expression...
// the var doesn't respect the local scope and set it globally.
// The let keyword doesn't do that. So if you create a for loop with a iterator declaration using the let keyword
// the i variable will not change globally after the loop is executed.
