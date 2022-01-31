/*
Write a program that takes any number of command line arguments, all iings, and reverses them before outputting them one at a time to the console.

Do NOT use JavaScript's Array.prototype.reverse or Array.prototype.join functions to solve this problem.
*/



function reverse(args) {

  for (let i = 0; i < args.length; i++){ //Iterates through the whole input (could be several words). i is index of array, each word of the input
    //console.log(args[i]);              //Test: It would print the words of the input
    let string = "";

    for (let d = args[i].length-1; d >= 0; d--) { //d is each letter of each [i](each word) Iterates backwards through each letter of the input (without -1 it returns undefined, because of the difference between the number of letters and the index)
      string += args[i][d];      //it adds to string (empty string) 
    }
    console.log(string);                 //Prints the new string, which is reversed.
  }
}

reverse(args);



//Next: same code but with args[i] named words and d named letterIndex. The thing is that as of now I feel more confortable using letters like i, d... and doing a comment on the side to know what they are referring to.

// let args = process.argv.slice(2);

// function reverse(args) {
//   //console.log(args);
//   for (let i = 0; i < args.length; i++){ //Iterates through the whole input (could be several words)
//     let word = args[i];
//     //console.log(args[i]);
//     let string = "";

//     for (let letterIndex = word.length-1; letterIndex >= 0; letterIndex--) { //Iterates backwards through each letter of the input (without -1 it returns undefined, because of the difference between the number of letters and the index)
//       string += word[letterIndex];      //it adds to string (empty string) 
//     }
//     console.log(string);                 //Prints the new string, which is reversed.
//   }
// }

// reverse(args);



// Sample runs

/*
node reverse.js hello goodbye
olleh
eybdoog
node reverse.js 1 fish 2 fish
1
hsif
2
hsif
*/