let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();

/* When you override a variable using var, this action doesnt return nothing, so you can override something and doesnt know.
The let keyword returns an error and alert you that you are overriding a variaable.
*/
