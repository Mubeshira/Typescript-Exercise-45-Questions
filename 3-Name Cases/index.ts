// Name Cases: Store a person’s name in a variable, and then print that person’s name 
// in lowercase, uppercase, and titlecase.

let personName: string = "Mubeshira Saad";
// Shows the name in small letters
 console.log(personName.toLowerCase()); 

//  Shows the name in capital letters
console.log(personName.toUpperCase());

// Shows the name with the first letter big
console.log(personName.replace(/\b\w/g, (char) => char.toUpperCase()));


