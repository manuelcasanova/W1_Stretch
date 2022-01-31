

let args = process.argv.slice(2);

let hipotenusa = function() {
  return Math.hypot(args[0], args[1]);
;}


console.log(hipotenusa(args[0], args[1]));
