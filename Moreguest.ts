/// Question no: 16


// Original guest list
let guestList: string[] = ["Leonardo da Vinci", "Marie Curie", "Nelson Mandela", "Albert Einstein"];

// Print a statement informing about the bigger dinner table
console.log("Good news! I found a bigger dinner table, so there's more space available.");

// Add one new guest to the beginning of the array
guestList.unshift("Isaac Newton");

// Add one new guest to the middle of the array
const middleIndex: number = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "Galileo Galilei");

// Use push() to add one new guest to the end of the list
guestList.push("Stephen Hawking");

// Printing a new set of invitation messages
guestList.forEach(person => {
    console.log(`Dear ${person},\nYou are cordially invited to dinner at my place. I would be honored to have your presence.\n\nSincerely,\n[Your Name]`);
});
