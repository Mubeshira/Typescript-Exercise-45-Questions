// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
// and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only
//  two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from 
// your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have 
// an empty list at the end of your program.




// creating a guest list array
let guestList = ["Zynah", "Alveera", "Zarsha", "Fabiha"];

// making variable for those who can't come
let donotCome = guestList [0];

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
let middleIndex: number =Math.floor(guestList.length / 2);

// Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Usama");


// Print message of updated list
console.log("Updates List of our Guests");

// Sending n invitation to our guest one by one with their names
guestList.forEach(oneguest => console.log(`Hello ${oneguest}, would you like to have dinner with me `));

// Inform that only two guests can be invited for dinner
console.log('Unfortunately, the new dinner table is not available, I can only invite two guest for dinner with me.');

// using while loop to remove guests from array
while(guestList.length > 2){
    let removeGuest = guestList.pop();
    console.log(`Sorry, ${removeGuest} I can't invite you for dinner.`);
    
}

// 

console.log("Invitation to the last two guests");

guestList.forEach(lasttwo => console.log(`Luckly ${lasttwo}, you are still invited for dinner.`));

// Removing last two guests from the list
guestList.pop();
guestList.pop();

console.log("Empty List:", guestList);

