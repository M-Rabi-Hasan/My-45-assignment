//// Question no: 6


// Store the person's name with whitespace characters
let personName: string = "\t \n  John Doe  \t \n";

// Print the name with whitespace around it
console.log("Name with whitespace:");
console.log(JSON.stringify(personName));  // JSON.stringify() will show whitespace characters

// Strip the whitespace from the name
let strippedName: string = personName.trim();

// Print the stripped name
console.log("\nStripped name:");
console.log(JSON.stringify(strippedName));
