/// Question no: 24


// Tests for equality and inequality with strings
console.log("Equality test with strings: 'apple' == 'apple'. I predict True.");
console.log('apple' == 'apple'); // True


// Tests using the lower case function
console.log("Lowercase test: 'HELLO' === 'hello'. I predict False.");
console.log('HELLO'.toLowerCase() === 'hello'); // False

// Numerical tests
console.log("Numerical equality test: 5 == 5. I predict True.");
console.log(5 == 5); // True


console.log("Greater than test: 10 > 5. I predict True.");
console.log(10 > 5); // True

console.log("Less than test: 5 < 10. I predict True.");
console.log(5 < 10); // True

console.log("Greater than or equal to test: 10 >= 10. I predict True.");
console.log(10 >= 10); // True

console.log("Less than or equal to test: 5 <= 5. I predict True.");
console.log(5 <= 5); // True

// Tests using "and" and "or" operators
console.log("And operator test: (true && true). I predict True.");
console.log(true && true); // True

console.log("Or operator test: (true || false). I predict True.");
console.log(true || false); // True

// Test whether an item is in an array
const fruits: string[] = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
console.log("Item in array test: Is 'banana' in the array? I predict True.");
console.log(fruits.includes('banana')); // True

// Test whether an item is not in an array
console.log("Item not in array test: Is 'pear' not in the array? I predict True.");
console.log(!fruits.includes('pear')); // True
