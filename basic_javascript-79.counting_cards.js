var count = 0;
function cc(card) {
  // Only change code below this line
  if (card >= 2 && card <= 6 ){
    count ++;
  } else if ( card === 7 || card === 8 || card === 9 ) {
    count += 0;
  } else if ( card === 10 || card === 'J' || card === 'Q' || card === 'K' || card === 'A') {
    count --;
  }

  if (count >= 1){
    return count + " Bet";
  } else {
    return count + " Hold";
  }
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');

/* Things that i learned from this lesson.
the if statement doesn't need a "solo else".
i.e, if you have only else if's, you don't need an else.
This is good because the else doesn't test condition.
