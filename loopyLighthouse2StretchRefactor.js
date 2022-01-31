//W1 STRETCH. REFACTOR

/*
ORIGINAL

const loopyLighthouse = function (range, multiples, words) {
  for (let i = range[0]; i <= range[1]; i++) {
    if (i % multiples[0] === 0 && i % multiples[1] === 0) {
      console.log("BattyBeacon")
    } else if (i % multiples[1] === 0) {
      console.log("Beacon")
    } else if (i % multiples[0] === 0) {
      console.log("Batty")
    } else {
      console.log(i);
    }
}
}

console.log(loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]));

*/


//REFACTORED

const loopyLighthouse = function(range, multiples, words) {
  for (let i = range[0]; i <= range[1]; i++) {              //change the simple loop to a for of loop
    if (i % multiples[0] === 0 && i % multiples[1] === 0) {
      console.log(words[0] + words [1]);
    } else if (i % multiples[1] === 0) {
      console.log(words[1]);
    } else if (i % multiples[0] === 0) {
      console.log(words[0]);
    } else {
      console.log(i);
    }
  }
};

console.log(loopyLighthouse([1, 10], [2, 5], ["Batty", "Beacon"]));

//23 minutes so far