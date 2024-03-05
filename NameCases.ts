  //Question no: 3
let personName: string = ("Dear Henry");

console.log(`lowercase: ${personName.toLowerCase()}`);
console.log(`Uppercase: ${personName.toUpperCase()}`);
console.log(`Titlecase: ${personName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')}`);