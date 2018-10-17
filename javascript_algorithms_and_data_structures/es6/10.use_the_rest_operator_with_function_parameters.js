const sum = (function() {
  "use strict";
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6

/* The rest operator take any number of arguments(as input of the user)
and store in a array(in the example above, the array calls args)
