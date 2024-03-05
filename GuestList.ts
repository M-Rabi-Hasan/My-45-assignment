/// Question no: 14


// Array of people to invite to dinner
const guestList: string[] = ["Leonardo da Vinci", "Marie Curie", "Nelson Mandela"];

// Printing an invitation message to each person
guestList.forEach(person => {
    console.log(`Dear ${person},\nYou are cordially invited to dinner at my place. I would be honored to have your presence.\n\nSincerely,\n[Your Name]`);
});
