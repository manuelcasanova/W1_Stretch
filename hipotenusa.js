//Write a program that takes two numbers, representing the length of each leg of a right triangle and returns the length of the hypotenuse

/*
Pseudocode

a squared + b squared = c squared
c = square root of (a squared + b squared)

To calculate de square root of c I could use the Math.sqrt() function

*/

let args = process.argv.slice(2);

let hipotenusa = function() {
  let a = args[0] * args[0];
  let b = args[1] * args[1];
  let c = Math.sqrt(a + b);
  return c
;}


console.log(hipotenusa(args[0], args[1]));


//Using Math.hypot

// let args = process.argv.slice(2);

// let hipotenusa = function() {
//   return Math.hypot(args[0], args[1]);
// ;}


// console.log(hipotenusa(args[0], args[1]));
