/// question no: 23


let car: string = 'subaru';

// Test 1
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // True

// Test 2
console.log("Is car == 'honda'? I predict False.");
console.log(car == 'honda'); // False

// Test 3
console.log("Is car != 'ford'? I predict True.");
console.log(car != 'ford'); // True

// Test 4
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru'); // True

// Test 5
console.log("Is car !== 'Subaru'? I predict True.");
console.log(car !== 'Subaru'); // True

// Test 6
console.log("Is car starts with 'su'? I predict True.");
console.log(car.startsWith('su')); // True

// Test 7
console.log("Is car ends with 'aru'? I predict True.");
console.log(car.endsWith('aru')); // True

// Test 8
console.log("Is car includes 'bar'? I predict False.");
console.log(car.includes('bar')); // False

// Test 9
console.log("Is car.length == 6? I predict True.");
console.log(car.length == 6); // True

// Test 10
console.log("Is car.length > 10? I predict False.");
console.log(car.length > 10); // False
