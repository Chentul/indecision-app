const f = () => true;
const s = "asdfghasfg";
const n = 1;
const b = true;
const obj = new Date();
const sym = Symbol();

// ================== getting the datatypes from const

console.log("getting the datatypes from const");

console.log( typeof f );
console.log( typeof s );
console.log( typeof n );
console.log( typeof b );
console.log( typeof obj );
console.log( typeof sym );

console.log(); // breakline

// ================== getting validations from datatypes

console.log("getting validations from datatypes");

console.log( typeof f == 'function');
console.log( typeof s == 'string');
console.log( typeof n == 'number');
console.log( typeof b == 'boolean');
console.log( typeof obj == 'object');
console.log( typeof sym == 'symbol');