// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more 
// guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people 
// that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
//  • Print a new set of invitation messages, one for each person in your list.
// creating a guest list array
var guestList = ["Zynah", "Alveera", "Zarsha", "Fabiha"];
// making variable for those who can't come
var donotCome = guestList[0];
// print the name who can't come
console.log(donotCome, "will not come");
// Add or remove values from guest list array
guestList.splice(0, 1, "Zaviyar");
// Message print for dinner table
console.log("Good News! We have found a Bigger Table for Dinner.");
// Adding a new guest at starting index of array
guestList.unshift("Muntaha");
// Adding a new guest at ending index of array
guestList.push("Zarrar");
// Get a middle index of our guest list array
var middleIndex = Math.floor(guestList.length / 2);
// Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Usama");
// Print message of updated list
console.log("Updates List of our Guests");
// Sending n invitation to our guest one by one with their names
guestList.forEach(function (oneguest) { return console.log("Hello ".concat(oneguest, ", would you like to have dinner with me ")); });
