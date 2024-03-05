// Question no: 15


// Original guest list
let guestList: string[] = ["Leonardo da Vinci", "Marie Curie", "Nelson Mandela"];

// Print the name of the guest who can't make it
const absentGuest: string = "Marie Curie";
console.log(`Unfortunately, ${absentGuest} can't make it to dinner.`);

// Replace the absent guest with a new person
const newGuest: string = "Albert Einstein";
const indexOfAbsentGuest: number = guestList.indexOf(absentGuest);
if (indexOfAbsentGuest !== -1) {
    guestList.splice(indexOfAbsentGuest, 1, newGuest);
}

// Printing a second set of invitation messages
guestList.forEach(person => {
    console.log(`Dear ${person},\nYou are cordially invited to dinner at my place. I would be honored to have your presence.\n\nSincerely,\n[Your Name]`);
});

