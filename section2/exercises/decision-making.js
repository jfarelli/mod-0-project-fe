/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 1;
var bearClothing = "";
var bearChoice = 1;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
}

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  console.log("You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!");
} else if (bearChoice === 2) {
  console.log("You tell the bear the " + bearClothing + " is too small and it starts to cry!");
} else if (bearChoice === 3) {
  console.log("You run as fast as you can into the next room. It's full of snakes!");
} else {
  console.log("You stay with the bear and become it's best friend!");
}

/*
Questions

1. In English, using technical vocabulary, describe what is happening between lines 14 and 18.
/* The if statement says that if the var doorChoice is strickly equal to 1, then the var bearClothing
(which is originally declared as an open string ("")) changes its value to "hat", or else it changes
its value to "scarf".

2. What variable has a new value assigned to it after the first if statement executes?
/* The var bearClothing.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
/* The var bearClothing would be "scarf", because of the else statement.

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
/* In the list of conditional statements, if var bearChoice is strictly equal to 1, then the first
sentence is logged to the console. If it is not equal to 1, than the computer
processes the else if/else statement(s) to log the correct answer to the console.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
/* The console would log the 2nd else if statement, because 3 is strictly equal
to 3: "You run as fast as you can into the next room. It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
/* If the doorChoice var value is 1, then the bearClothing var changes to "hat".
If the bearChoice var is changed to 2, then the first else if statement would be
logged to the console: "You tell the bear the hat is too small and it starts to cry".

7. What is your favorite ending?
/* Ha!! As someone with a big noggin, I like the first else if conditional outcome.

*/
