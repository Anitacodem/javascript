let score = "33abx"
console.log(typeof score);
let valueInNumber = Number(score);
console.log(typeof(valueInNumber));
console.log(valueInNumber);

// 33 => 33
// "33a" => NaN
// true => 1;, false => 0
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false;
// "" => false;
// "Anita" => true

let someNumber = 20;
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof(stringNumber))