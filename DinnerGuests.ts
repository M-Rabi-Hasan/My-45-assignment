/// Question no : 19


// Original guest list
let guestList: string[] = ["Isaac Newton", "Leonardo da Vinci", "Galileo Galilei", "Marie Curie", "Nelson Mandela", "Albert Einstein", "Stephen Hawking"];

// Print the number of people you are inviting to dinner
console.log(`You are inviting ${guestList.length} people to dinner.`);

// Print a message informing that only two people can be invited
console.log("Unfortunately, the new dinner table won't arrive in time, and I can only invite two people for dinner.");

// Remove guests from the list until only two names remain
while (guestList.length > 2) {
    const removedGuest: string | undefined = guestList.pop();
    if (removedGuest !== undefined) {
        console.log(`Sorry, ${removedGuest}, but I can't invite you to dinner.`);
    }
}

// Print invitation messages to the two remaining guests
guestList.forEach(person => {
    console.log(`Dear ${person},\nYou're still invited to dinner at my place. I apologize for any inconvenience.\n\nSincerely,\n[Your Name]`);
});

// Print the number of people you are inviting to dinner again
console.log(`Now you are inviting ${guestList.length} people to dinner.`);
