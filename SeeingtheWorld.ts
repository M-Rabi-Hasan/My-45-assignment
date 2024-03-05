/// Question no: 18


// Array of places to visit
let placesToVisit: string[] = ["Japan", "Iceland", "Australia", "Italy", "Canada"];

// Print the array in its original order
console.log("Original order:", placesToVisit);

// Print the array in alphabetical order without modifying the actual list
console.log("Alphabetical order:", [...placesToVisit].sort());

// Print the array in its original order to show it remains unchanged
console.log("Original order:", placesToVisit);

// Print the array in reverse alphabetical order without changing the order of the original list
console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());

// Print the array in its original order to show it remains unchanged
console.log("Original order:", placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);

// Reverse the order of the list again to restore the original order
placesToVisit.reverse();
console.log("Original order:", placesToVisit);

// Sort the array so it's stored in alphabetical order
placesToVisit.sort();
console.log("Sorted in alphabetical order:", placesToVisit);

// Sort the array to change it to reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", placesToVisit);
