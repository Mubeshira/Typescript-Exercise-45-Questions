// Alien colors#3" Turn your if-else chain from exercise 5=4 into an if-else chain.
// Write the three version of the program, making sure that each msg is printed for the appropriate color alien.

let aliencolors:  string = "green";

// If the alien color is green, print a message that the player earned 5 points.
// If the alien color is yellow, print a message that the player earned 10 points.
// If the alien color is red, print a message that the player earned 15 points.

// Version 1 of the program.
if(aliencolors === "green"){
    console.log("Version 1:player earned 5 points.");
 } 
 else if(aliencolors === "yellow"){
    console.log("player earned 10 points.");

 }else if(aliencolors === "red"){
    console.log("player earned 15 points.");
 }
 else{
    console.log("Please select right color")
 }

//  Version 2 of the program.
aliencolors = "yellow";
if(aliencolors === "green"){
    console.log("player earned 5 points.");
 } 
 else if(aliencolors === "yellow"){
    console.log("Version 2: player earned 10 points.");

 }else if(aliencolors === "red"){
    console.log("player earned 15 points.");
 }
 else{
    console.log("Please select right color")
 }

 //  Version 3 of the program.
aliencolors = "red";
if(aliencolors === "green"){
    console.log("player earned 5 points.");
 } 
 else if(aliencolors === "yellow"){
    console.log("player earned 10 points.");

 }else if(aliencolors === "red"){
    console.log("Version 3: player earned 15 points.");
 }
 else{
    console.log("Please select right color")
 }