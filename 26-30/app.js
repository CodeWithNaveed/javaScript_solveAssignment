// var number = +prompt("Enter number in decimal","3.45214");
// document.write("number: "+number+ "</br>")
// var roundOff = Math.round(number)
// document.write("round off value: "+roundOff+ "</br>")
// var floorvalue = Math.floor(number)
// document.write("floor value: "+floorvalue+ "</br>")
// var ceilvalue = Math.ceil(number)
// document.write("ceil value: "+ceilvalue+ "</br>")





// var number = +prompt("Enter a negative floating point number","-3.454");
// document.write("number: "+number+ "</br>")
// var roundOff = Math.round(number)
// document.write("round off value: "+roundOff+ "</br>")
// var floorvalue = Math.floor(number)
// document.write("floor value: "+floorvalue+ "</br>")
// var ceilvalue = Math.ceil(number)
// document.write("ceil value: "+ceilvalue+ "</br>") 




// var absolute = +prompt("Enter a number");
// document.write (`The absolute value of ${absolute} is ${Math.abs(absolute)}`)




// Simulating a dice
// function diceSimulator() {
//     var randomNumber = Math.floor(Math.random() * 6) + 1;
//     document.write(`The value of the dice is: ${randomNumber}`);
// }
// diceSimulator();
// document.write("<br>");
// diceSimulator();
// document.write("<br>");





// var randomNumber = Math.floor(Math.random() * 2) + 1;
// document.write(`The value of the toss is: ${randomNumber}`);
// if (randomNumber === 1) {
//     document.write("<br>"+"Head");
// }
// else {
//     document.write("<br>"+"Tail");
// }




// // Generate a random number between 1 and 100
// var randomNumber = Math.floor(Math.random() * 100) + 1;
// document.write(`A random number between 1 and 100 is: ${randomNumber}`);




// var userWeight = prompt("Please enter your weight in kg");
// var parsedWeight = parseFloat(userWeight);
// document.write(`Your weight is ${parsedWeight} kg`);





// var number = prompt("Enter a number between 1 - 10");
// var parsedNumber = parseInt(number);
// if (number >= 1 && number <= 10) {
//     document.write ("Your number is: " + parsedNumber + " congrutulations");
// }
// else {
//     document.write("<center>Your number is not between 1 and 10. Try again.<center><br><center>prevent this page from creating additional dialogs<center>");
// }



var secretNumber = Math.floor(Math.random() * 10) + 1;
var userInput = parseInt(prompt("Enter a number between 1 and 10"));
if (userInput === secretNumber) {
    document.write("Congratulations! You guessed the secret number.");
}
else {
    document.write("Sorry, the secret number was " + secretNumber);
}

