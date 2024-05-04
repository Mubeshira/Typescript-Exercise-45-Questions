// Equality and Inequality test 1
console.log("Equality test with string:", "Apple" === "Apple");
// Equality and Inequality test 2
console.log("Inequality test with string:", "Apple" != "Orange");
// Test using the lower case function
console.log("Lower case function test:", "Hello".toLowerCase() === "hello");
// Numerical tests involving equality 
console.log("Equality test with numbers: ", 26 === 26);
// Numerical tests involving inequality
console.log("Inquality test with numbers: ", 26 != 30);
// Greater than test 
console.log("Greater than test:", 10 > 5);
//less than test
console.log("less than test:", 5 < 10);
// Greater than or equal to
console.log("Greater than and equal to test: ", 10 >= 10);
// less than or equal to
console.log("less than or equal to: ", 5 <= 10);
// Test using "and" operator
console.log("And operator test: ", 5 === 5 && 10 > 5);
// Test using "or" operator
console.log("or operator test: ", 5 === 5 || false);
// Test wheather an item is in a array
var fruits = ['Apple', 'banana', 'pear'];
console.log('Test "Apple" in the array: ', fruits.includes("Apple"));
// Test wheather an item is not in a array
console.log('Testing "peach" is not in a array: ', !fruits.includes("peach"));
